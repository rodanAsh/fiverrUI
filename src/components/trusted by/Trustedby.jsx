import React from 'react'
import './Trustedby.scss'
import meta from '../../images/meta.png'
import google from '../../images/google.png'
import netflix from '../../images/netflix.png'
import pandg from '../../images/pandg.png'
import paypal from '../../images/paypal.png'

const Trustedby = () => {
  return (
    <div className='trusted-by'>
        <div className="container">
            <span>Trusted By:</span>
            <img src={meta} alt="" />
            <img src={google} alt="" />
            <img src={netflix} alt="" />
            <img src={pandg} alt="" />
            <img src={paypal} alt="" />
        </div>
    </div>
  )
}

export default Trustedby