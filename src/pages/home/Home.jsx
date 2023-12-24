import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import Trustedby from '../../components/trusted by/Trustedby'
import Slide from '../../components/Slide/Slide'
import { cards } from '../../data/slideData'
import Catcard from '../../components/catcard/Catcard'
import check from '../../images/check.svg'
import tick from '../../images/whiteTick.png'
import Video from '../../videos/video.mp4'
import Projectcard from '../../components/projectcard/Projectcard'
import { projects } from '../../data/slideData'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <Trustedby />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card)=>(
          <Catcard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src={check} alt="" />
              Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src={check} alt="" />
              Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            <div className="title">
              <img src={check} alt="" />
              Pay when you're happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            <div className="title">
              <img src={check} alt="" />
              Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <video src={Video} controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiver business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience pack with tools and benefits, dedicated to business</p>
            <div className="title">
              <img src={tick} alt="" />
              Connect to freelancers with proven business experience 
            </div>
            <div className="title">
              <img src={tick} alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src={tick} alt="" />
              manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="projects">
      <h1 className='project-title'>Inspiring work made on Fiverr</h1>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card)=>(
          <Projectcard key={card.id} item={card}/>
        ))}
      </Slide>
      </div>
      </div>
  )
}

export default Home