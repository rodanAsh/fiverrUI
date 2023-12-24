import React from 'react'
import './Featured.scss'
import search from "../../images/search.png"
import man from "../../images/man.png"


const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left-f">
                <h1>Find the perfect <span>freelance</span> services for your business</h1>
                <div className="search">
                    <div className="search-input">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Try building mobile app' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right-f">
                <img src={man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured