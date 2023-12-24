import React from 'react'
import './Orders.scss'
import { Link } from 'react-router-dom'
import contact from '../../images/contact.png'

const Orders = () => {
  const currentUser = {
    id : 1,
    name : "Roronoa Zoro",
    isSeller : true
  }
  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>

          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-photo/copywriter-writing-ideas_1098-17580.jpg?size=626&ext=jpg" alt="" /></td>
            <td>Order1</td>
            <td>88</td>
            <td>Roronoa Zoro</td>
            <td><img className='delete' src={contact } alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-photo/top-view-person-writing-laptop-with-copy-space_23-2148708035.jpg?size=626&ext=jpg" alt="" /></td>
            <td>Order2</td>
            <td>88</td>
            <td>Roronoa Zoro</td>
            <td><img className='delete' src={contact } alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-photo/design-creative-inspiration-art-style-concept_53876-120035.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Order3</td>
            <td>88</td>
            <td>Roronoa Zoro</td>
            <td><img className='delete' src={contact } alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Order4</td>
            <td>88</td>
            <td>Roronoa Zoro</td>
            <td><img className='delete' src={contact } alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/premium-photo/silhouette-guitarist-stage-fans_367038-94.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Order5</td>
            <td>88</td>
            <td>Roronoa Zoro</td>
            <td><img className='delete' src={contact } alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-psd/technology-banner-template_23-2148928991.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Order6</td>
            <td>88</td>
            <td>Roronoa Zoro</td>
            <td><img className='delete' src={contact } alt="" /></td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default Orders