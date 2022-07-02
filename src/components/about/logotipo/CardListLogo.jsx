import { Fragment } from "react"
import Card from "./Card"


const CardListLogo = () => {
    return (
        <div className="w-full flex flex-wrap gap-6">
            <Card title='Caracteristicas' object={{ corazón: 'Amor', paloma: 'Paz', Balón: 'Deporte, educación y cultura' }} />
            <Card title='Colores' object={{ Rojo: 'Pasión', Violeta: 'Transformación y confianza'}} />
            <Card title='Eslogan' object={{ Transformando: 'Cambiar para bien la cultura ciudadana', pazión: 'Las palabras entrelazadas de paz y pasión'}} />
        </div>
    )
}

export default CardListLogo