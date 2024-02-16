import {Outlet} from "react-router-dom";
import style from "./AuthLayout.module.css"

export function AuthLayout(){
    return <div className={style['layout']}>
        <div className={style['logo']}>
            <img src='/logo.svg' alt='Логотип'/>
        </div>
        <div className={style['content']}>
            <Outlet/>
        </div>
    </div>
}