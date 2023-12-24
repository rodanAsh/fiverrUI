import React from 'react'
import './Gigcard.scss'
import { gigs } from '../../data/slideData'
import { Link } from 'react-router-dom'
import heart from "../../images/heart.png"
import star from "../../images/star.png"

const Gigcard = ({item}) => {
  return (
    <Link to="/gig/123" className='link'>
    <div className='gigcard'>
            <img src={item.img} alt="" />
            <div className="info">
                <div className="user">
                    <img src={item.pp} alt="" />
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                    <img src={star} alt="" />
                    <span>{item.star}</span>
                </div>
            </div>
            <hr />
            <div className="details">
                <img src={heart} alt="" />
                <div className="price">
                <span>Starting at</span>
                <h2>$ {item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Gigcard