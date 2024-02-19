import style from "./ProductCard.module.css"
import {ProductCardProps} from "./ProductCardProps.ts";
import {Link} from "react-router-dom";
import {MouseEvent} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cartSlice.ts";

export function ProductCard(props: ProductCardProps){
    const dispatch = useDispatch<AppDispatch>()
    const add = (e: MouseEvent)=>{
        e.preventDefault()
        dispatch(cartActions.add(props.id))
    }
    return(
        <Link to={`/product/${props.id}`} className={style['link']}>
            <div className={style['card']}>
                <div className={style['head']} style={{backgroundImage: `url('${props.image}')`}}>
                    <div className={style['price']}>
                        {props.price}&nbsp;
                        <span className={style['currency']}>₽</span>
                    </div>
                    <button className={style['add-to-cart']}onClick={add}>
                        <img src='/bag.svg' alt='Добавить в корзину'/>
                    </button>
                    <div className={style['rating']}>
                        {props.rating}&nbsp;
                        <img src="/star.svg" alt="Рейтинг"/>
                    </div>
                </div>
                <div className={style['footer']}>
                    <div className={style['title']}>{props.name}</div>
                    <div className={style['description']}>{props.description}</div>
                </div>
            </div>
        </Link>
    )
}