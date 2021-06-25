import React from 'react'

import './Logo.scss'
import logo from '../../../assets/images/logo_small.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
    )
}

export default Logo
