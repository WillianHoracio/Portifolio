import { useState } from 'react'
import './Card.css'
import CardItem from './CardItem'
import { act } from 'react-dom/test-utils'

const Card = ({title, itemList, image, column, active}) => {
 
    const [cardActive, setCardActive] = useState(active)
    
    let borderRadiusHeader = 'card__header card__border__left'
  
    if (column === 2) {
        borderRadiusHeader = 'card__header card__border__right'
    }

    const itemQuantity = itemList.length
    const cardHeight = cardActive ? 'auto' : 80
    const showCardContent = cardActive ? (itemQuantity*52): 0 //cada item aumenta a altura da div em aproximadamente 52px

    const toggleCardHeight = () => {
        setCardActive(!cardActive)
    }

    return (
        <div className='card' style={{height: cardHeight}}>
            <div className={borderRadiusHeader} onClick={toggleCardHeight}>
                <label>{title}</label>
                <img src={image}/>
            </div>
            <div className='card__content' style={{height: showCardContent}}>
                {itemList.map(item => <CardItem key={item} item={item}/>)}
            </div>
        </div>
    )
}

export default Card
