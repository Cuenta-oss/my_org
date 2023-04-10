import { useState } from "react"
import "./componenteTexto.css"

export const CampoTexto = (props) => {
    // const [valor, setValor] = useState("");
    const handleChange = (event) => {
        props.updateValue(event.target.value);
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={handleChange}
        />
    </div>
}