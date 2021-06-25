import React, {useEffect, useRef} from 'react'
import {init} from "ityped";

import './Homepage.scss'
import daniel from '../../../assets/images/danielferreira_image.jpg'

const Homepage = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Junior Developer", "Sys Admin",
                "Python aficionado", "Coffee taster",
                "Enjoys messing with Powershell",
                "Likes Portuguese cuisine",
                "Pasteis de Belém devourer"],
        });
    }, []);

    return (
        <div className="homepage" id="homepage">
            <div className="left">
                <div className="leftContainer">
                    <div className="imgContainer">
                        <img src={daniel} alt=""/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello friends, I'm</h2>
                    <h1>Daniel Ferreira</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Homepage
