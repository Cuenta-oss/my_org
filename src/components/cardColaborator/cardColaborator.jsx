import "./cardColaborator.css";
import { AiFillCloseCircle } from "react-icons/ai"

export const Colaborator = (props) => {
    const { id, name, photo, position, team } = props.datos
    const { primaryColor, deleteColaborator } = props

    return <div className="card__colaborator">
        < AiFillCloseCircle className="card__colaborator-delete" onClick={() => deleteColaborator(id)} />
        <div className="card__colaborator-header" style={{ backgroundColor: primaryColor }}>
            {/* <img src="https://dummyimage.com/200x200/e837e8/edeefc.png&text=image" alt="image"></img> */}
            <img src={photo} alt={name}></img>
        </div>
        <div className="card__colaborator-body">
            <h4 className="card__colaborator-name">{name}</h4>
            <h5 className="card__colaborator-function">{position}</h5>
        </div>
    </div>
}