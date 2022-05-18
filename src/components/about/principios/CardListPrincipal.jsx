import Card from "../Card";
import { principios } from "helpers/principios";

const CardListPrincipal = () => {
    return (
        <div className='w-full flex flex-wrap gap-6'>
            {
                principios.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardListPrincipal