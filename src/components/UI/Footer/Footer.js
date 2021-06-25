import React from 'react'
import Logo from "../Logo/Logo";
import Icons from "./Icons/Icons";

import './Footer.scss'

const Footer = (props) => {

    const Copyright = () => {
        return (
            <div className="copyright">
                <p>
                    <a
                        href={'https://www.ferreiratech.pt'}
                        target="_blank"
                        rel="noopener noreferrer">
                        FerreiraTech
                    </a>
                    <span>©</span> {new Date().getFullYear()}
                </p>
            </div>
        )
    }

    return (
        <div className="footer" onClick={props.setMenuOpen}>
            <div className="wrapper">
                <div className="imgContainer">
                    <Logo />
                </div>
                <Copyright/>
                <div className="iconsContainer">
                    <Icons/>
                </div>
            </div>
        </div>
    )
}

export default Footer