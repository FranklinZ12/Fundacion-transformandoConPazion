import LinksFooter from "./LinksFooter"


const ListLinks = () => {
    return (
        <div className="grid grid-flow-col gap-4">
            <LinksFooter ruta='/' title='INICIO' />
            <LinksFooter ruta='nosotros/organizacion/' title='NOSOTROS' />
            <LinksFooter ruta='procesos/todos/' title='PROCESOS' />
            <LinksFooter ruta='contacto/' title='CONTACTO' />
        </div>
    )
}

export default ListLinks