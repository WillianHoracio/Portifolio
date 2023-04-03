import './Title.css'
import imperial from '../../images/imperial.png'
import sword from '../../images/sword.png'


import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'

const Title = ({title}) => {
    return (
        <div className='title'>
            <img src={sword} className='sword'/>
            <label>         
                <h2>{title}</h2>   
            </label>
            <img src={sword} className='sword-right'/>
        </div>
    )
}

export default Title