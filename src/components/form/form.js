import './form.css';
import { CampoTexto } from '../componenteTexto';
import { ListaOpciones } from '../listaOpciones/listaOpciones';
import { Boton } from '../button/button';
import { useState } from 'react';
const Form = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            position,
            photo,
            team
        }
        console.log(data);
    }
    return <section className='section__form'>
        <form onSubmit={handleSubmit}>
            <h2 className='section__title'>Rellena el formulario para crear el colaborador.</h2>
            <div className='form__inputs'>
                <CampoTexto titulo="Nombre" placeholder="Ingrese nombre" required valor={name} updateValue={setName} />
                <CampoTexto titulo="Puesto" placeholder="Ingrese puesto" required valor={position} updateValue={setPosition} />
                <CampoTexto titulo="Foto" placeholder="Url de foto" required valor={photo} updateValue={setPhoto} />
                <ListaOpciones valor={team} updateValue={setTeam} />
                <Boton texto="Crear" />
            </div>
        </form>
    </section>
}
export default Form;