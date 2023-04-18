import './form.css';
import { Field } from '../componenteField';
import { ListaOpciones } from '../listaOpciones/listaOpciones';
import { Boton } from '../button/button';
import { useState } from 'react';
const Form = (props) => {

    /* estados colaborador */
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    /* estados equipos */
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const { registroColaborador, registroEquipo } = props;

    const handleSubmitColab = (event) => {
        event.preventDefault();
        const data = {
            name,
            position,
            photo,
            team
        }
        registroColaborador(data);
    }

    const handleSubmitTeam = (event) => {
        event.preventDefault();
        console.log(title, color);
        registroEquipo({ title, primaryColor: color });
    }
    return <section className='section__form'>
        <form onSubmit={handleSubmitColab}>
            <h2 className='section__title'>Rellena el formulario para crear el colaborador.</h2>
            <div className='form__inputs'>
                <Field
                    titulo="Nombre"
                    placeholder="Ingrese nombre"
                    required
                    valor={name}
                    updateValue={setName}
                />
                <Field
                    titulo="Puesto"
                    placeholder="Ingrese puesto"
                    required
                    valor={position}
                    updateValue={setPosition}
                />
                <Field
                    titulo="Foto"
                    placeholder="Url de foto"
                    required
                    valor={photo}
                    updateValue={setPhoto}
                />
                <ListaOpciones
                    valor={team}
                    updateValue={setTeam}
                    listTeam={props.listTeam}
                />
                <Boton texto="Crear" />
            </div>
        </form>
        <form onSubmit={handleSubmitTeam}>
            <h2 className='section__title'>Rellena el formulario para crear el equipo.</h2>
            <div className='form__inputs'>
                <Field
                    titulo="Titulo"
                    placeholder="Ingrese titulo"
                    required
                    valor={title}
                    updateValue={setTitle}
                />
                <Field
                    titulo="Color"
                    placeholder="Ingrese color en hexadecimal"
                    required
                    valor={color}
                    updateValue={setColor}
                    type="color"
                />
                <Boton texto="Crear" />
            </div>
        </form>
    </section>
}
export default Form;