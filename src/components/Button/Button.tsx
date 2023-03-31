import { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
    name: string,
    props?: ButtonHTMLAttributes<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({name, props}) => {
    return (
        <button type="button" className="button" {...props}>{name}</button>
    )
}

export default Button