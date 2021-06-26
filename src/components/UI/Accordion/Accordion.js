import React, {useState} from 'react'

import './Accordion.scss'

const Accordion = (props) => {
    const [open, setOpen] = useState(props.default);

    return (
        <div className="item">
            <div className="title" onClick={() => setOpen(!open)}>
                <div>{props.title}</div>
                <div>{open ? '-' : '+'}</div>
            </div>
            {open && <div className="content">{props.content}</div>}
        </div>
    )
}

export default Accordion
