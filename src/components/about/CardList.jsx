import Card from "./Card"

const CardList = ({tipo}) => {
  return (
      <div className='w-full flex flex-wrap gap-6'>
          {
              tipo.map((item, index) => {
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

export default CardList