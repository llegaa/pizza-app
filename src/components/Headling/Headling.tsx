import {HeadlingProps} from "./HeadlingProps.ts";
import cn from "classnames";
import style from "./Headling.module.css"
export function Headling({children,className , ...props}: HeadlingProps){
    return(
        <h1 {...props} className={cn(className, style['h1'])}>{children}</h1>
    )
}