import {Link} from "react-router-dom";

export function Card(){
    return <>
        <div>
            <Link to='/'>Menu</Link>
            <Link to='/card'>Корзина</Link>
        </div>
        Card
    </>
}