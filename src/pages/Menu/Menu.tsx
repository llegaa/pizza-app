import {Headling} from "../../components/Headling/Headling.tsx";
import Search from "../../components/Search/Search.tsx";
import style from "./Menu.module.css"
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";

export function Menu(){
    return <>
        <div className={style['head']}>
            <Headling>Меню</Headling>
            <Search placeholder='Введите блюдо или состав'></Search>
        </div>
        <div>
            <ProductCard id={1} title={'Наслаждение'} description={'Салями, руккола, помидоры, оливки'} image='/product.svg' price={300} rating={4.5}/>
        </div>
    </>
}