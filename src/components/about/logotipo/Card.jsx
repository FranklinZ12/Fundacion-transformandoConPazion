

const Card = ({ title, object }) => {
    return (
        <div className='card_About rounded border'>
            <figure className='text-left'>
                <figcaption>
                    <h3 className='my-3'>{title}</h3>
                    <ol>
                        {Object.keys(object).map((key, index) => {
                            return (
                                <li key={index}>
                                    <span className='font-semibold'>{key}:</span>
                                    <span> {object[key]}</span>
                                </li>
                            )
                        }
                        )}
                    </ol>
                </figcaption>
            </figure>
        </div>
    )
}

export default Card