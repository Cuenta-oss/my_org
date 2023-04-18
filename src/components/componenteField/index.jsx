import { useState } from "react"
import "./componenteField.css"

export const Field = (props) => {
    // const [valor, setValor] = useState("");
    const { type = "text" } = props
    // console.log(type)
    const handleChange = (event) => {
        props.updateValue(event.target.value);
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={handleChange}
            type={type}
        />
    </div>
}