const Card = ({ title, text }) => {
    return (
        <div className='item'>
            <h2 className='text-3xl font-bold my-2 color-text text-center'>{title}</h2>
            <p className='text-base opacity-100 text-gray-700'>
                {text}
            </p>
        </div>
    )
}

export default Card