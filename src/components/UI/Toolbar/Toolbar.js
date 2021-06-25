import React from 'react'

import './Toolbar.scss'

const Toolbar = (props) => {
    return (
        <div className={"toolbar " + (props.menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#homepage" className="logo">
                        <h4>
                            FerreiraTech.
                        </h4>
                    </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => props.setMenuOpen(!props.menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbar