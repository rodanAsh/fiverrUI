import React from 'react'
import './Messages.scss'
import { Link } from 'react-router-dom'

const Messages = () => {
  const message = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi corrupti voluptatem expedita provident nesciunt laborum quibusdam, qui aspernatur error."
  return (
    <div className='messages'>
      <div className="container">
      <div className="title">
          <h1>Messages</h1>
        </div>
        <table>

          <tr>
            <th>Buyer</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className='active'>
            <td>Roronoa Zoro</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 70)}...</Link></td>
            <td>1 day ago</td>
            <td><button>mark as read</button></td>
          </tr>

          <tr className='active'>
            <td>Roronoa Zoro</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 70)}...</Link></td>
            <td>2 days ago</td>
            <td><button>mark as read</button></td>
          </tr>

          <tr>
            <td>Roronoa Zoro</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 70)}...</Link></td>
            <td>1 week ago</td>
            <td><button className='disabled'>mark as read</button></td>
          </tr>

          <tr>
            <td>Roronoa Zoro</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 70)}...</Link></td>
            <td>1 week ago</td>
            <td><button className='disabled'>mark as read</button></td>
          </tr>

          <tr>
            <td>Roronoa Zoro</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 70)}...</Link></td>
            <td>2 weeks ago</td>
            <td><button className='disabled'>mark as read</button></td>
          </tr>

          <tr>
            <td>Roronoa Zoro</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 70)}...</Link></td>
            <td>1 moth ago</td>
            <td><button className='disabled'>mark as read</button></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages