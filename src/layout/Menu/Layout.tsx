import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import style from "./Layout.module.css"
import cn from "classnames"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {getProfile, userActions} from "../../store/userSlice.ts";
import {useEffect} from "react";
export function Layout(){
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const profile = useSelector((s: RootState)=> s.user.profile)
    const items = useSelector((s:RootState)=> s.cart.items)
    useEffect(()=>{
        dispatch(getProfile())
    },[dispatch])
    const logout = ()=>{
       dispatch(userActions.logout())
        navigate('/auth/login')
    }
    return <div className={style['layout']}>
        <div className={style['sidebar']}>
            <div className={style['user']}>
                <img className={style['avatar']} src='/avatar.svg' alt='Аватарка'/>
                <div className={style['name-user']}>{profile?.name}</div>
                <div className={style['email-user']}>{profile?.email}</div>
            </div>
            <div className={style['menu']}>
                <NavLink className={({isActive})=>cn(style['link'], {
                    [style.active]: isActive
                })} to='/'><img src='/menu.svg' alt='меню'/>
                    Menu</NavLink>
                <NavLink className={({isActive})=>cn(style['link'], {
                    [style.active]: isActive
                })} to='/card'><img src='/cart.svg' alt='корзина'/>
                    Корзина <span className={style['cart-count']}>{items.reduce((acc, item)=>acc+=item.count, 0)}</span></NavLink>
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