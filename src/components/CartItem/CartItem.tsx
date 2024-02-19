import style from "./CartItem.module.css"
import {CartItemProps} from "./CartItemProps.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cartSlice.ts";

function CartItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const increase = () => {
        dispatch(cartActions.add(props.id));
    };

    const decrease = () => {
        dispatch(cartActions.remove(props.id));
    };

    const remove = () => {
        dispatch(cartActions.delete(props.id));
    };


    return (
        <div className={style['item']}>
            <div className={style['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
            <div className={style['description']}>
                <div className={style['name']}>{props.name}</div>
                <div className={style['price']}>{props.price}&nbsp;₽</div>
            </div>
            <div className={style['actions']}>
                <button className={style['minus']} onClick={decrease}>
                    <img src="/minus.svg" alt="Удалить из корзины" />
                </button>
                <div className={style['number']}>{props.count}</div>
                <button className={style['plus']} onClick={increase}>
                    <img src="/plus.svg" alt="Добавить в корзину" />
                </button>
                <button className={style['remove']} onClick={remove}>
                    <img src="/remove.svg" alt="Удалить все" />
                </button>
            </div>
        </div>
    );
}

export default CartItem;