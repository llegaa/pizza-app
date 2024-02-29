import {Await, useLoaderData, useNavigate} from "react-router-dom";
import {Product} from "../../interfaces/product.interface.ts";
import {Suspense} from "react";
import {Headling} from "../../components/Headling/Headling.tsx";
import Button from "../../components/Button/Button.tsx";
import style from "./Product.module.css"
import classnames from "classnames"
export function Product(){
    //const {id} = useParams()
    const navigation = useNavigate()
    const data = useLoaderData() as {data: Product}
    return <>
        <Suspense fallback={'Загрузка'}>
        <Await resolve={data.data}>
            {({data}: { data: Product })=>(
                <div className={style['product']}>
                    <div className={style['header']}>
                        <div className={style['title']}>
                            <button onClick={()=> navigation('/')}><img src='/back.svg' alt='Назад'/></button>
                            <Headling>{data.name}</Headling>
                        </div>
                        <Button className={style['bag']}><img src='/bag.svg' alt='Корзина'/> В корзину</Button>
                    </div>
                    <div className={style['content']}>
                        <img className={style['image']} src={data.image} alt='Изображение товара'/>
                        <div className={style['information']}>
                            <div className={classnames(style['container'], style['price'])}>Цена <div>{data.price} <span>₽</span></div></div>
                            <div className={style['container']}>Рейтинг <div className={style['rating']}>{data.rating} <img src='/star.svg' alt='Звезда'/></div></div>
                            <div>Состав <ul>{data.ingredients.map(i=><li>{i}</li>)}</ul></div>
                        </div>
                    </div>
                </div>
            )}
        </Await>
        </Suspense>
    </>
}