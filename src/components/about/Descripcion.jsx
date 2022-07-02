import React, { Fragment } from 'react'

const Descripcion = ({ title, parrafo }) => {
    return (
        <Fragment>
            <span className="title_Descripcion">
                {title}
            </span>
            <p align="left">{parrafo}</p>
        </Fragment>
    )
}

export default Descripcion