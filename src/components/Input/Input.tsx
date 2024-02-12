import style from './Input.module.css'
import cn from "classnames";
import {forwardRef} from "react";
import {InputProps} from "./InputProps.ts";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({className, isValid = true, ...props}, ref) {
    return(
        <input {...props} ref={ref} className={cn(className, style['input'], {
            [style['invalid']]: !isValid,
        })}/>
    )
})
export default Input