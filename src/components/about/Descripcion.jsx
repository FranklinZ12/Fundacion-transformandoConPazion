import React, { Fragment } from 'react'

const Descripcion = ({ title, parrafo }) => {
    return (
        <Fragment>
            <span className="text-[18px] mb-[4em] font-bold uppercase tracking-[5px] leading-[1.8] relative text-gray-800">
                {title}
            </span>
            <p>{parrafo}</p>
        </Fragment>
    )
}

export default Descripcion