import React from 'react'
import MenuItem from "./MenuItem/MenuItem";

const MenuItems = (props) => {
    return (
        <>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'homepage'} name={'Homepage'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'roadmap'} name={'Roadmap'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'certification'} name={'Certification'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'about'} name={'About'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'contact'} name={'Contact'}/>
        </>
    )
}

export default MenuItems
