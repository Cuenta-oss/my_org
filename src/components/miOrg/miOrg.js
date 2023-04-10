import { useState } from "react"
import "./miOrg.css"

export const MiOrg = (props) => {
    return <section className="section__miOrg">
        <h2 className="title">Mi organización</h2>
        <img src="/img/add.png" onClick={props.changeShow} />
    </section>
}