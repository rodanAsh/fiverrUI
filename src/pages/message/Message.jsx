import React from 'react'
import './Message.scss'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className='link'>MESSAGES ></Link> RORONOA ZORO >
        </span>

        <div className="messages">
          <div className="item">
            <img src={user} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti voluptatem expedita provident nesciunt laborum quibusdam, qui aspernatur error.</p>
          </div>

          <div className="item owner">
            <img src={user} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti voluptatem expedita provident nesciunt laborum quibusdam, qui aspernatur error.</p>
          </div>

          <div className="item">
            <img src={user} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti voluptatem expedita provident nesciunt laborum quibusdam, qui aspernatur error.</p>
          </div>

          <div className="item owner">
            <img src={user} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti voluptatem expedita provident nesciunt laborum quibusdam, qui aspernatur error.</p>
          </div>

          <div className="item">
            <img src={user} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti voluptatem expedita provident nesciunt laborum quibusdam, qui aspernatur error.</p>
          </div>

          <div className="item owner">
            <img src={user} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti voluptatem expedita provident nesciunt laborum quibusdam, qui aspernatur error.</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder="write a message" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message