import React from 'react'

import './Menu.scss'
import MenuItems from "./MenuItems/MenuItems";

const Menu = (props) => {
    return (
        <div className={"menu " + (props.menuOpen && "active")}>
            <ul>
                <MenuItems setMenuOpen={() => props.setMenuOpen(false)}/>
            </ul>
        </div>
    )
}

export default Menu