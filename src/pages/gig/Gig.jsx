import React from 'react'
import './Gig.scss'
import star from '../../images/star.png' 
import like from '../../images/like.png'
import dislike from '../../images/dislike.png'  
import tick from '../../images/greentick.png'
import clock from '../../images/timer.png'
import reset from '../../images/refresh.png'
import { Slider } from 'infinite-react-carousel'

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">FIVER > GRAPHICS & DESIGN ></span>
          <h1>I will create AI generated art for you</h1>

          <div className="user">
            <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" alt="" />
            <span>Ai Lani</span>
          
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow = {1} arrowsScroll={1} className="slider">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/298676084/original/4c637509cced37cc3df7b1efa213e0bea2a277ab/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/298676084/original/44b4501783b655490412494e43b4167e6fcb6042/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298676084/original/c73f161ce591d08b618bef938b960757a92ff006/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/ec2c1b756a52ca313d869634f02a116d-1701961497/14/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/549e59a63b4aea47302bd8f274663d34-1701947311/Untitled%20design%20-%202023-12-07T120811.174/create-custom-ai-art-using-midjourney-advanced-ai-tool.png" alt="" />
          </Slider>
          <h2>About this gig</h2>
          <p>I create one-of-a-kind AI images using Midjourney. I've put in countless hours to effectively master this software, and that's why I'm the ideal designer for your project. You no longer need to spend hours searching for the right image or try to make a design from scratch. With your words, I am able to generate a wide variety of styles, themes, and colour palettes that reflect your idea of a perfect masterpiece. You get to be the artist - no experience necessary! Whether it's for a business presentation, social media content, or a personal project, my platform offers a quick and easy solution to all your art needs. Upgrade your creativity with my services. Send me a message anytime! I'm here.</p>

          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" alt="" />
              <div className="info">
                <h2>Ai Lani <span>@ai_lani</span></h2>
                <span>I put the AI in ImAge</span>
                <div className="rating">
                <img src={star} alt="" />
                <h2>5 <u>(520)</u></h2>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Canada</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">2 hours</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, German, Spanish</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Jan 2023</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">about 2 hours</span>
                </div>
              </div>
              <hr />
              <p>Hi there & welcome to my shop. I'm ai_lani - a digital artist who creates fully customizable images based on your specific needs and vision. You send me the photo or description, and I will present to you a one of a kind - AI generated piece of art. If you have any questions, send me a message anytime :)</p>
            </div>
          </div>
          
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4ac888ab88bed4a9166212eba3f54b03-178402941694802361.362606/3A70BD22-A664-4B3C-A786-C09CFCE165DE" alt="" />
                <div className="info">
                  <span>rehabberman</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>{" "}
                <span>| 2 months ago</span>
              </div>
              <p>I have worked with ai_lani on several projects and each time she has exceeded my expectations. Her creativity is beyond excellent. We use her work throughout our business and my customers always smile when viewing her work. ai_lani has become an important part of our business as we grow.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={like} alt="" />
                <span>Yes</span>
                <img src={dislike} alt="" />
                <span>No</span>
              </div>
            </div>
            
            <hr />

            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/82f7579169401fb639e29d0f0d49de21-1644961321700855796.493851/CF7D5D84-DFCF-4ECD-A91B-D4EDDDAF1CE0" alt="" />
                <div className="info">
                  <span>nicole</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>{" "}
                <span>| 1 week ago</span>
              </div>
              <p>You did an amazing job creating this coverart for me! I had no idea what route I was going to take until I seen your template and it just took away so much stress off my mind. It came out better than I could imagine, you had the exact vision I needed. I can't thank you enough, we will definitely work again soon!</p>
              <div className="helpful">
              <span>Helpful?</span>
              <img src={like} alt="" />
              <span>Yes</span>
              <img src={dislike} alt="" />
              <span>No</span>
            </div>
            </div>

            <hr />

            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3ff137a938cef771ac01c2519a197487-968248511696166240506/JPEG_20231001_091720_1616136835427110492.jpg" alt="" />
                <div className="info">
                  <span>veenelly007</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h4> 5</h4>{" "}
                <span>| 2 months ago</span>
              </div>
              <p>My first time, and this seller is truly enchanting. Not just in business, but on the airwaves too. I felt a deep connection with her, unlike anything before. Her patience, willingness to help, and eagerness to please are exceptional. 'Extraordinary' and 'Incredible' sum it up. Thank you so much. May blessings light your way always.</p>
              <div className="helpful">
              <span>Helpful?</span>
              <img src={like} alt="" />
              <span>Yes</span>
              <img src={dislike} alt="" />
              <span>No</span>
            </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create a unique high quality AI generated image based on a description that you give me</p>
          <div className="details">
            <div className="items">
              <div className="item">
                <img src={clock} alt="" />
                <span>2 Days delivery</span>
              </div>
              <div className="item">
                <img src={reset} alt="" />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="features">
              <div className="desc">
                <img src={tick} alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="desc">
                <img src={tick} alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="desc">
                <img src={tick} alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="desc">
                <img src={tick} alt="" />
                <span>Additional design</span>
              </div>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig