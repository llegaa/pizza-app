import {Link} from "react-router-dom";

export function Menu(){
    return <>
        <div>
            <Link to='/'>Menu</Link>
            <Link to='/card'>Корзина</Link>
        </div>
        Menu</>
}