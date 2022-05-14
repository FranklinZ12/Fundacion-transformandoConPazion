import { Fragment } from "react";
import Card from "./Card";

const CardList = () => {
    return (
        <Fragment>
            <Card title='MISIÓN'
                text='La fundación es una organización sin ánimo de lucro que se enfoca en la educación, el ambiente,
                el deporte y la cultura en todo el territorio, beneficiando a las comunidades, siendo
                auto sostenibles y construyendo un entorno de paz y sana convivencia.'
            />
            <Card title='VISIÓN'
                text='Nos proyectamos a crear transformaciones de vida en nuestras comunidades, buscando
                soluciones a las problemáticas sociales, actuando para su bienestar y desarrollo integral,
                transformando y vinculando las acciones deportivas, educativas y culturales.'
            />
        </Fragment>
    )
}

export default CardList