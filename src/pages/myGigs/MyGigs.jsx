import React from 'react'
import './MyGigs.scss'
import Delete from '../../images/delete.png'
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>

          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-photo/copywriter-writing-ideas_1098-17580.jpg?size=626&ext=jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src={Delete} alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-photo/top-view-person-writing-laptop-with-copy-space_23-2148708035.jpg?size=626&ext=jpg" alt="" /></td>
            <td>Gig2</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src={Delete} alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-photo/design-creative-inspiration-art-style-concept_53876-120035.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Gig3</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src={Delete} alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-psd/business-company-banner-template_23-2148924998.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Gig4</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src={Delete} alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/premium-photo/silhouette-guitarist-stage-fans_367038-94.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Gig5</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src={Delete} alt="" /></td>
          </tr>

          <tr>
            <td><img className='img' src="https://img.freepik.com/free-psd/technology-banner-template_23-2148928991.jpg?size=626&ext=jpg&ga=GA1.1.1746644444.1702179966&semt=sph" alt="" /></td>
            <td>Gig6</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src={Delete} alt="" /></td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default MyGigs