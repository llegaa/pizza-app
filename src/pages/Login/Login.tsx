import {Headling} from "../../components/Headling/Headling.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import style from "./Login.module.css"
import {FormEvent, useState} from "react";
import axios, {AxiosError} from "axios";
import {PREFIX} from "../../helpers/API.ts";
import {LoginResponse} from "../../interfaces/auth.interface.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {userActions} from "../../store/userSlice.ts";
export type LoginForm = {
    email:{
        value: string
    }
    password: {
        value: string
    }
}
export function Login() {
    const [error, setError] = useState<string|undefined|null>()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const submit = async (e: FormEvent)=>{
        e.preventDefault()
        setError(null)
        const target = e.target as typeof e.target & LoginForm
        const {email, password} = target
        await sendLogin(email.value, password.value)
    }
    const sendLogin = async (email: string, password: string)=>{
        try{
            const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {email, password})
            console.log(data)
            dispatch(userActions.addJwt(data.access_token))
            navigate('/')
        }catch (e){
            if(e instanceof AxiosError){
                setError(e.response?.data.message)
            }
        }
    }
    return <div className={style['login']}>
        <Headling>Вход</Headling>
        {error && <div className={style['error']}>{error}</div>}
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