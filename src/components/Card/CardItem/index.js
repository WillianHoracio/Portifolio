import './CardItem.css'

const CardItem = ({item}) => {

    return (
        <div className='card-item'>
            <label>{item}</label>
        </div>
    )
}

export default CardItem