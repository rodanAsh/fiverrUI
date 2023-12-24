import React from 'react'
import './Catcard.scss'
import { Link } from 'react-router-dom'

const Catcard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className='catcard'>
        <img src={item.img} alt="" />
        <span className='desc'>{item.description}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default Catcard