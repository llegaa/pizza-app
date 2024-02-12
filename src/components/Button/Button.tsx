import style from './Button.module.css'
import {ButtonProps} from "./Button.props.ts";
import cn from 'classnames'

// export const ButtonAlt: FC<ButtonProps> = ({className, children, ...props})=>{
//     return(
//         <button className={cn('button accent', className)} {...props}>{children}</button>
//     )
// }

function Button({children, className, appearance = 'small', ...props}: ButtonProps){
    return(
        <button className={cn(style['button'], style['accent'], className, {
            [style['small']]: appearance === 'small',
            [style['bid']]: appearance === 'big'
        })} {...props}>{children}</button>
    )
}
export default Button