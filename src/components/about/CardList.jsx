import Card from "./Card";

const CardList = () => {
    return (
        <div className='w-full flex flex-wrap gap-6'>
            <Card
                icon='fa-solid fa-dove'
                title='Garantía de derechos'
                text='Por medio del comportamiento de los jóvenes y grupos sociales,
                      como fundación se les respetara sus derechos, custodiando día a día
                      que estos sean cumplidos.'
            />
            <Card
                icon='fa-solid fa-scale-balanced'
                title='Igualdad de oportunidades'
                text='Tanto para la fundación como para los jóvenes y demás participes 
                de la comunidad se les dará igualdad en cada uno de los procesos que se lleven
                a cabo.'
            />
            <Card
                icon='fa-solid fa-magnifying-glass'
                title='Transparencia'
                text='Todos nuestros procesos serán llevados con total transparencia para 
                lograr la confianza de los demás jóvenes y toda la comunidad.'
            />
            <Card
                icon='fa-solid fa-handshake-simple'
                title='Cooperacíon'
                text=' Como fundación pese a las adversidades que se presenten en el 
                transcurso del tiempo, entra a jugar el trabajo en equipo y la cooperación 
                como grupo de trabajo para que las metas propuestas sean cumplidas.'
            />
        </div>
    )
}

export default CardList