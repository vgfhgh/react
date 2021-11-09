import React from 'react'
import './Button.css'


function Button({children,size, color, width, handleClick, disabled}){
    
    return <button onClick={handleClick} className={`Button ${size} ${color} ${width}`} disabled={disabled}>{children}</button>
}
export default Button

Button.defaultProps = {
    size:'medium',
    color:'tomato',
    disabled:false
}