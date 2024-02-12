import {Link} from "react-router-dom";


export function Error(){
    return <>
        <div>
            <Link to='/'>Menu</Link>
            <Link to='/card'>Корзина</Link>
        </div>
        Error</>
}