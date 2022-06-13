import React, { Fragment } from 'react';
import Descripcion from '../Descripcion';

const Reseña = () => {
    const parrafo = <>
        <strong>La Fundación Transformando Con Pazión</strong> se crea el 17 de diciembre del año
        2017 en Medellín y está ubicada en la comuna 15 Guayabal La Colinita.
        <br />
        <br />
        Con más de dos años de experiencia, se inicia con un objetivo específico que es disminuir las
        problemáticas que existen entre aficionados al deporte o hinchas, así como crear oportunidades
        para la población juvenil donde su rango de edad es entre los 14 a los 28 años, estrategias del
        aprovechamiento del tiempo libre y aumento del desarrollo integral de las comunidades.
        <br />
        <br />
        Por medio de diferentes actividades y acciones sociales, actualmente se empiezan a realizar varios
        talleres de formación entre ellos, entrenamiento deportivo en Futsala y Futbol de Salon en las
        diferentes categorías, también talleres de formación en herramientas en Office y liderazgo
        empresarial. Entre los proyectos sociales y económicos de gran impacto se encuentra
        la Liga Guayabal 2020 y el Club Deportivo TCP.
        <br />
        <br />
        La Fundación TCP lleva un trabajo articulado con la alcaldía de Medellín, comunidad y líderes
        sociales con el fin de aumentar la participación, generar un ambiente de convivencia y paz y
        crear nuevas economías que impulsen el desarrollo y auto sostenimiento de la comuna 15.
    </>;
    return (
        <Fragment>
            <Descripcion title='Reseña histórica'
                parrafo={parrafo}
            />
        </Fragment>
    )
}

export default Reseña