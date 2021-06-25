import React from 'react'

const MenuItem = (props) => {
    return (
        <li>
            <a onClick={() => props.setMenuOpen(false)} href={`#${props.id}`}>{props.name}</a>
        </li>
    )
}

export default MenuItem
