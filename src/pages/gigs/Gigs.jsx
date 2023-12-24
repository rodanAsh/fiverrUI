import React, { useState } from 'react'
import './Gigs.scss'
import down from '../../images/down.png'
import {gigs} from '../../data/slideData'
import Gigcard from '../../components/gigcard/Gigcard'

const Gigs = () => {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState("sales")

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className="container">
        <div className="breadcrumbs">FIVERR > GRAPHICS & DESIGN ></div>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <div className="sortby">SortBy</div>
            <div className="sorttype">{sort === "Sales" ? "Best Selling" : "Newest"}</div>
            <img src={down} alt="" onClick={()=>setOpen(!open)}/>
            {open && (<div className="right-menu">

              {
              sort === "Sales" ? <span onClick={()=>reSort("CreatedAt")}>Newest</span>
              : <span onClick={()=>reSort("Sales")}>Best Selling</span>
              }
            </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig)=>(
            <Gigcard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs