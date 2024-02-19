import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import style from "./Success.module.css"
export function Success(){
    const navigate = useNavigate()
    return(
        <div className={style['success']}>
            <img src='/pizza.png' alt="Пицца"/>
            <div className={style['text']}>Ваш заказ успешно оформлен!</div>
            <Button appearance="big" onClick={()=>navigate('/')}>Сделать новый</Button>
        </div>
    )
}