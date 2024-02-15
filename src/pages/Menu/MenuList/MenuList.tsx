import {ProductCard} from "../../../components/ProductCard/ProductCard.tsx";
import {MenuListProps} from "./MenuListProps.ts";
import style from "./MenuList.module.css"
export function MenuList({products}: MenuListProps){
    return <div className={style['wrapper']}>{products.map(p =>(
            <ProductCard key={p.id}
                         id={p.id}
                         name={p.name}
                         description={p.ingredients.join(', ')}
                         image= {p.image}
                         price={p.price}
                         rating={p.rating}/>
    )) }</div>
}