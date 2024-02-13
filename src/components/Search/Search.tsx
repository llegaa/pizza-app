import style from './Search.module.css'
import cn from "classnames";
import {forwardRef} from "react";
import {SearchProps} from "./SearchProps.ts";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({className, isValid = true, ...props}, ref) {
    return(
        <div className={style['input-wrapper']}>
            <input {...props} ref={ref} className={cn(className, style['input'], {
                [style['invalid']]: !isValid,
            })}/>
            <img className={style['icon']} src='/search.svg' alt='поиск'/>
        </div>
    )
})
export default Search