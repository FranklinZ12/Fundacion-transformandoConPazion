import Object from "./Object";

const ObjectList = () => {
    return (
        <ul className='grid sm:grid-cols-2 sm:gap-8'>
            <Object
                text='Realizar diagnónsticos sociales en el territorio para visualizar
              los posibles problemas y necesidades que tienen los habitantes.'
            />
            <Object
                text='Elaborar proyectos, capacitaciones y eventos que vinculen a las
                comunidades para proteger la integridad entre llas y asi contribuir en su
                bienestar.'
            />
        </ul>
    )
}

export default ObjectList