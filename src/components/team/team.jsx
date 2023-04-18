import "./team.css";
import { Colaborator } from "../cardColaborator/cardColaborator";
import hexToRgba from 'hex-to-rgba';

export const Team = (props) => {
    const { primaryColor, secondaryColor, title, id } = props.datos
    const { colaborators, deleteColaborator, updateColorTeam, selectFavorite } = props

    return <>
        {
            colaborators.length > 0 &&
            <section className="section__team" style={{ backgroundColor: hexToRgba(primaryColor, .5) }}>
                <input
                    type="color"
                    className="section__team-color"
                    value={primaryColor}
                    onChange={(event) => {
                        updateColorTeam(event.target.value, id)
                    }}
                />
                <h3 className="section__nameTeam" style={{ borderColor: primaryColor }}>{title}</h3>
                <div className="section__colaborators">
                    {
                        colaborators.map((colaborador, index) => <Colaborator
                            datos={colaborador}
                            key={index}
                            primaryColor={primaryColor}
                            deleteColaborator={deleteColaborator} 
                            selectFavorite={selectFavorite}/>)
                    }
                </div>
            </section >
        }
    </>
}