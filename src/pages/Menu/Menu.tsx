import {Headling} from "../../components/Headling/Headling.tsx";
import Search from "../../components/Search/Search.tsx";
import style from "./Menu.module.css"
import {PREFIX} from "../../helpers/API.ts";
import {Product} from "../../interfaces/product.interface.ts";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {MenuList} from "./MenuList/MenuList.tsx";

function Menu(){
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | undefined>()
    const getMenu = async ()=>{
        try{
            setIsLoading(true)
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`)
            setProducts(data)
            setIsLoading(false)
        }catch (e){
            if(e instanceof AxiosError){
                setError(e.message)
            }
            setIsLoading(false)
            console.error(e)
            return
        }
    }
    useEffect(()=> {
        getMenu()
    },[])
    return <>
        <div className={style['head']}>
            <Headling>Меню</Headling>
            <Search placeholder='Введите блюдо или состав'></Search>
        </div>
        <div>
            {error && <>{error}</>}
            {!isLoading && <MenuList products={products}/>}
            {isLoading && <div>Загрузка...</div>}
        </div>
    </>
}
export default Menu;