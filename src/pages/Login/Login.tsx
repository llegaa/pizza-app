import {Headling} from "../../components/Headling/Headling.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import style from "./Login.module.css"
import {FormEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {login, userActions} from "../../store/userSlice.ts";
export type LoginForm = {
    email:{
        value: string
    }
    password: {
        value: string
    }
}
export function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {jwt, loginErrorMessage} = useSelector((s: RootState)=> s.user)
    useEffect(()=>{
        if(jwt){
            navigate('/')
        }
    }, [jwt, navigate])
    const submit = async (e: FormEvent)=>{
        e.preventDefault()
        dispatch(userActions.clearLoginError())
        const target = e.target as typeof e.target & LoginForm
        const {email, password} = target
        await sendLogin(email.value, password.value)
    }
    const sendLogin = async (email: string, password: string)=>{
        dispatch(login({email, password}))

    }
    return <div className={style['login']}>
        <Headling>Вход</Headling>
        {loginErrorMessage && <div className={style['error']}>{loginErrorMessage}</div>}
        <form className={style['form']} onSubmit={(e)=>submit(e)}>
            <div className={style['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id="email" placeholder='Email' name="email"/>
            </div>
            <div className={style['field']}>
                <label htmlFor="password">Ваш email</label>
                <Input id="password" type="password" placeholder='Password' name="password"/>
            </div>
            <Button appearance="big">Вход</Button>
        </form>
        <div className={style['links']}>
            <div>Нет акканута?</div>
            <Link to="/auth/register">Зарегистрироваться</Link>
        </div>
    </div>
}