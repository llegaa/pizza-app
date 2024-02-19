import {Headling} from "../../components/Headling/Headling.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import CartItem from "../../components/CartItem/CartItem.tsx";
import {useEffect, useState} from "react";
import {Product} from "../../interfaces/product.interface.ts";
import axios, {post} from "axios";
import {PREFIX} from "../../helpers/API.ts";
import style from "./Cart.module.css"
import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {cartActions} from "../../store/cartSlice.ts";
const DELIVERY_FEE = 169
export function Card(){
    const [cartProducts, setCartProducts] = useState<Product[]>([])
    const items = useSelector((s:RootState)=> s.cart.items)
    const jwt = useSelector((s: RootState)=>s.user.jwt)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const total = items.map(i => {
            const product = cartProducts.find(p => p.id === i.id);
            if (!product) {
                return 0;
            }
            return i.count*product.price}).reduce((acc,i)=> acc+=i, 0)
    const getItem = async (id: number)=>{
        const {data} = await axios.get<Product>(`${PREFIX}/products/${id}`)
        return data
    }
    const loadItems = async () =>{
        const res = await Promise.all(items.map(i=> getItem(i.id)))
        setCartProducts(res)
    }
    useEffect(()=>{
        loadItems()
    },[items])
    const checkout = async ()=>{
        const {data} = await axios.post(`${PREFIX}/order`, {
            products: items
        }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch(cartActions.clean())
        navigate('/success')
    }
    return (
        <>
            <Headling className={style['headling']}>Корзина</Headling>
            {items.map(i => {
                const product = cartProducts.find(p => p.id === i.id);
                if (!product) {
                    return;
                }
                return <CartItem key={product.id} count={i.count} {...product} />;
            })}
            <div className={style['line']}>
                <div className={style['text']}>Итог</div>
                <div className={style['price']}>{total}&nbsp;<span>₽</span></div>
            </div>
            <hr className={style['hr']}/>
            <div className={style['line']}>
                <div className={style['text']}>Доставка</div>
                <div className={style['price']}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
            </div>
            <hr className={style['hr']}/>
            <div className={style['line']}>
                <div className={style['text']}>Итог <span className={style['total-count']}>({items.length})</span></div>
                <div className={style['price']}>{total+DELIVERY_FEE}&nbsp;<span>₽</span></div>
            </div>
            <div className={style['checkout']}>
                <Button appearance='big' onClick={checkout}>Оформить</Button>
            </div>
        </>
    )
}