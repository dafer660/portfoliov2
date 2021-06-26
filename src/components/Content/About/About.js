import React from 'react'

import "./About.scss"
import Accordion from "../../UI/Accordion/Accordion";

const About = () => {

    const data = [
        {
            id: 1,
            title: 'Introduction',
            content: <p>Hello! My name is Daniel, I am from <strong>Portugal</strong>, where there is sun practically
                every day, which is awesome! My favorite delicacy is <strong>Pastel de Nata</strong>,
                from <strong>Belém</strong> (it could not be from anywhere else!) and I really enjoy a
                good <strong>"bica"</strong>! (expresso).</p>,
            default: true
        },
        {
            id: 2,
            title: 'Fitness & Lifestyle',
            content: <p>I really like to keep fit and go to the gym, whether simply weight lifting, do some cardio or
                practice some kickboxing.</p>
        },
        {
            id: 3,
            title: 'Personality & Mindset',
            content: <p>
                A little a bit about my personality, I consider myself a faithful and hardworking individual.
                Usually, I tend to be a quiet person and talk usually when required, unless we are in a more
                informal environment.
                I like to keep things in a positive way and spread that whenever possible (i.e. when it's
                opportune to do so).
                Another of my traits, is that I think about several outcomes, which, in a way, can be applied to every
                aspect of life, whether in the workplace or on our daily lives.</p>
        },
        {
            id: 4,
            title: 'Hobbies & Projects',
            content: <p>
                One of my hobbies is simply playing around with my <strong>Proxmox VE</strong> server,
                creating virtual machines, <strong>LXC</strong> or <strong>Docker</strong> containers. I am also
                very interested developing web applications
                with <strong>Python</strong>, <strong>Flask</strong>, <strong>Rest
                APIs</strong> and/or <strong>React JS</strong>. Even though I am at an early stage when it comes
                to React JS, I feel very comfortable
                with <strong>Python</strong> and <strong>Flask</strong> (and <strong>Jinja2</strong> templating).</p>
        },
        {
            id: 5,
            title: 'Thoughts & Future',
            content: <p>
                The combination of <strong>Systems Administration</strong> and <strong>Web Development</strong> are
                two of my passions, as I enjoy creating new things. As a Sys Admin, I
                consider <strong>security</strong> essential, as my past roles consisted mostly on security audits.
                When it comes to the next couple of years, I see automation all over the place, as well as, remote
                work, which can be a good thing.
                In that sense, I am willing to learn new technologies and improve on them in order to catch up to
                future trends.
            </p>
        },
        {
            id: 6,
            title: 'Some Skills',
            content: <p>
                <span><strong>Windows Server</strong></span>
                <span><strong>Linux</strong></span>
                <span><strong>Virtualization</strong></span>
                <span><strong>Python</strong></span>
                <span><strong>Flask</strong></span>
                <span><strong>ReactJS</strong></span>
                <span><strong>MySQL</strong></span>
                <span><strong>MariaDB</strong></span>
                <span><strong>PostgreSQL</strong></span>
                <span><strong>Postman</strong></span>
            </p>
        }
    ]

    return (
        <div id="about" className="about">
            <div className="container">
                {
                    data.map((d) => (
                        <Accordion key={d.id} title={d.title} content={d.content} default={d.default}/>
                    ))
                }
            </div>
        </div>
    )
}

export default About
