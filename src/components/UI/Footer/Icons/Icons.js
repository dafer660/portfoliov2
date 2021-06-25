import React from 'react'

import './Icons.scss'

import github from '../../../../assets/svg/github.svg'
import linkedin from '../../../../assets/svg/linkedin.svg'
import reddit from '../../../../assets/svg/reddit.svg'

const Icons = () => {

    const linkedInURL = 'https://www.linkedin.com/in/daniel-f-684b3666'
    const redditURL = 'https://www.reddit.com/user/dafer18'
    const githubURL = 'https://github.com/dafer660'

    return (
        <div className="links">
            <a href={githubURL} target="_blank"
               rel="noopener noreferrer">
                <img src={github} alt={'LinkedIn'}/>
            </a>
            <a href={linkedInURL} target="_blank"
               rel="noopener noreferrer">
                <img src={linkedin} alt={'LinkedIn'}/>
            </a>
            <a href={redditURL} target="_blank"
               rel="noopener noreferrer">
                <img src={reddit} alt={'LinkedIn'}/>
            </a>
        </div>
    )
}

export default Icons
