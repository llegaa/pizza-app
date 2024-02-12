import {HeadlingProps} from "./HeadlingProps.ts";

export function Headling({children, ...props}: HeadlingProps){
    return(
        <h1>{children}</h1>
    )
}