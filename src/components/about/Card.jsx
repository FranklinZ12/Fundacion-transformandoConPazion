import { useEffect, useState } from "react";

const Card = ({ icon, title, text }) => {
    const [titles] = useState(
        ['Igualdad','Ciudadanía plena', 'Voluntad', 'Respeto']
    );
    const [titulo, setTitulo] = useState(false);

    useEffect(() => {
        titles.forEach(element => {
            if (element === title) {
                setTitulo(true);
            }
        });
    }, [title, titles]);

    return (
        <div className={(titulo ? 'card_About' : 'card_About rounded border')}>
            <figure className='text-left'>
                <div className='icon'>
                    <i className={`${icon} icon-style`} role='img' title='paloma' />
                </div>
                <figcaption>
                    <h3 className='my-3'>{title}</h3>
                    <h4>
                        {text}
                    </h4>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card