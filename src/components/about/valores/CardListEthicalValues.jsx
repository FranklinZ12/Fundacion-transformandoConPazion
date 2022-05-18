import Card from "../Card";
import { valores } from "helpers/valores";

const CardListEthicalValues = () => {
    return (
        <div className='w-full flex flex-wrap gap-6'>
            {
                valores.map((item, index) => {
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

export default CardListEthicalValues