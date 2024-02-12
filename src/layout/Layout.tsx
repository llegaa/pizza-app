import {NavLink, Outlet} from "react-router-dom";
import Button from "../components/Button/Button.tsx";
import style from "./Layout.module.css"
import cn from "classnames"
export function Layout(){
    return <div className={style['layout']}>
        <div className={style['sidebar']}>
            <div className={style['user']}>
                <img className={style['avatar']} src='/avatar.svg' alt='Аватарка'/>
                <div className={style['name-user']}>Антон Ларичев</div>
                <div className={style['email-user']}>alaricode@ya.ru</div>
            </div>
            <div className={style['menu']}>
                <NavLink className={({isActive})=>cn(style['link'], {
                    [style.active]: isActive
                })} to='/'><img src='/menu.svg' alt='меню'/>
                    Menu</NavLink>
                <NavLink className={({isActive})=>cn(style['link'], {
                    [style.active]: isActive
                })} to='/card'><img src='/cart.svg' alt='корзина'/>
                    Корзина</NavLink>
            </div>
            <Button className={style['exit']}>
                <img src='/exit.svg' alt="Выход"/>
                Выйти
            </Button>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
}