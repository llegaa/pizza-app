import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import style from "./Layout.module.css"
import cn from "classnames"
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {JWT_PERSISTENT_STATE, userActions} from "../../store/userSlice.ts";
export function Layout(){
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const logout = ()=>{
       dispatch(userActions.logout())
        navigate('/auth/login')
    }
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
            <Button onClick={logout} className={style['exit']}>
                <img src='/exit.svg' alt="Выход"/>
                Выйти
            </Button>
        </div>
        <div className={style['content']}>
            <Outlet/>
        </div>
    </div>
}