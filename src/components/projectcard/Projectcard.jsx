import React from 'react'
import './Projectcard.scss'
import { Link } from 'react-router-dom'


const Projectcard = ({item}) => {
  return (
    <Link to="/" className='link'>
    <div className='projectcard'>
        <img src={item.img} alt="" />
        <div className="info">
            <img src={item.pp} alt="" />
            <div className="text">
                <h2>{item.cat}</h2>
                <span>{item.name}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Projectcard