import "./listaOpciones.css"

export const ListaOpciones = (props) => {
    const team = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ]
    const handleChange = (event) => {
        console.log(event.target.value)
        props.updateValue(event.target.value)
    }
    return <div className="section__options">
        <label>Lista de opciones</label>
        <select value={props.valor} onChange={handleChange}>
            <option value="" disabled defaultValue="" hidden="">Seleccionar equipo</option>
            {team.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}