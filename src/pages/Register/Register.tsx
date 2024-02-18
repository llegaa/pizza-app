import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {FormEvent, useEffect} from "react";
import style from "../Login/Login.module.css";
import {Headling} from "../../components/Headling/Headling.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import {register, userActions} from "../../store/userSlice.ts";
export type RegisterForm = {
    email:{
        value: string
    }
    password: {
        value: string
    }
    name: {
        value: string
    }
}
export function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {jwt, registerErrorMessage} = useSelector((s: RootState)=> s.user)
    useEffect(()=>{
        if(jwt){
            navigate('/')
        }
    }, [jwt, navigate])
    const submit = async (e: FormEvent)=>{
        e.preventDefault()
        dispatch(userActions.clearRegisterError())
        const target = e.target as typeof e.target & RegisterForm
        const {email, password, name} = target
        dispatch(register({email: email.value, password: password.value, name: name.value}))
    }

    return <div className={style['login']}>
        <Headling>Регистрация</Headling>
        {registerErrorMessage && <div className={style['error']}>{registerErrorMessage}</div>}
        <form className={style['form']} onSubmit={(e)=>submit(e)}>
            <div className={style['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id="email" placeholder='Email' name="email"/>
            </div>
            <div className={style['field']}>
                <label htmlFor="password">Ваш пароль</label>
                <Input id="password" type="password" placeholder='Password' name="password"/>
            </div>
            <div className={style['field']}>
                <label htmlFor="name">Ваше имя</label>
                <Input id="name" placeholder='Имя' name="name"/>
            </div>
            <Button appearance="big">Зарегестрироваться</Button>
        </form>
        <div className={style['links']}>
            <div>Есть акканут?</div>
            <Link to="/auth/login">Войти</Link>
        </div>
    </div>
}