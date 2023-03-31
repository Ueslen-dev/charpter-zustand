import { InputHTMLAttributes } from 'react'

interface InputProps {
    props?: InputHTMLAttributes<HTMLInputElement>
}
 
const Input: React.FC<InputProps> = ({props}) => {
    return <input type="text" className="input" {...props}/>
}

export default Input