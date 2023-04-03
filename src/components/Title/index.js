import './Title.css'
import sword from '../../images/sword.png'
import { useState } from 'react'



const Title = ({title, imagem}) => {

    return (
        <div className='title'>
            {imagem && <img src={sword} className='sword'/>}
            <label>         
                <h2>{title}</h2>   
            </label>
            {imagem && <img src={sword} className='sword-right'/>}
        </div>
    )
}

export default Title