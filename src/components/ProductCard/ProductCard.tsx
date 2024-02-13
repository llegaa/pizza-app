import style from "./ProductCard.module.css"
import {ProductCardProps} from "./ProductCardProps.ts";
import {Link} from "react-router-dom";
export function ProductCard(props: ProductCardProps){
    return(
        <Link to={'/'} className={style['link']}>
            <div className={style['card']}>
                <div className={style['head']} style={{backgroundImage: `url('${props.image}')`}}>
                    <div className={style['price']}>
                        {props.price}&nbsp;
                        <span className={style['currency']}>₽</span>
                    </div>
                    <button className={style['add-to-cart']}>
                        <img src='/bag.svg' alt='Добавить в корзину'/>
                    </button>
                    <div className={style['rating']}>
                        {props.rating}&nbsp;
                        <img src="/star.svg" alt="Рейтинг"/>
                    </div>
                </div>
                <div className={style['footer']}>
                    <div className={style['title']}>{props.title}</div>
                    <div className={style['description']}>{props.description}</div>
                </div>
            </div>
        </Link>
    )
}