import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import user from '../../images/user.png'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const [open, setOpen] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    })

    const currentUser = {
        id:1,
        name: "Roronoa Zoro",
        isSeller: true
    }

    const {pathname} = useLocation()

  return (
    <div className= {active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to='/' className='link'> 
                <span className='text'>fiverr</span>
                <span className='dot'>.</span>
                </Link>
            </div>
            <div className="links">
                <span>fiverr business</span>
                <span>explore</span>
                <span>english</span>
                {!currentUser && <span>sign in</span>}
                {!currentUser ?.isSeller && <span>become a seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                <div className="user" onClick={()=>setOpen(!open)}>
                    <img src={user} alt="zoro" />
                    <div>{currentUser?.name}</div>

                    { open &&
                        <div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                <Link className='link' to='myGigs'>Gigs</Link>
                                <Link className='link' to='add'>Add New Gigs</Link>
                                </>
                            )
                        }
                        <Link className='link' to='orders'>Orders</Link>
                        <Link className='link' to='messages'>Messages</Link>
                        <Link className='link'>Logout</Link>
                    </div>
                    }
                </div>
                )}
            </div>
        </div>
        {(pathname !== "/" || active) && (
        <>
            <hr />
            <div className="menu">
                <Link className='link' to="/">
                    Graphics & Design
                </Link>
                <Link className='link' to="/">
                    Video & Animation
                </Link>
                <Link className='link' to="/">
                    Writing & Translation
                </Link>
                <Link className='link' to="/">
                    AI Services
                </Link>
                <Link className='link' to="/">
                    Digital Marketing
                </Link>
                <Link className='link' to="/">
                    Music & Audio
                </Link>
                <Link className='link' to="/">
                    Programming & Tech
                </Link>
                <Link className='link' to="/">
                    Business
                </Link>
                <Link className='link' to="/">
                    Lifestyle
                </Link>
            </div>
            <hr />
        </>
        )}
    </div>
  )
}

export default Navbar