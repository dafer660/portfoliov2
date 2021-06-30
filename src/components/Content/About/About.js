import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./About.scss"

const About = () => {
    const [expanded, setExpanded] = React.useState(1);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const data = [
        {
            id: 1,
            title: 'Introduction',
            content: <>Hello! My name is Daniel, I am from <strong>Portugal</strong>, where there is sun practically
                every day, which is awesome! My favorite delicacy is <strong>Pastel de Nata</strong>,
                from <strong>Belém</strong> (it could not be from anywhere else!) and I really enjoy a
                good <strong>"bica"</strong>! (expresso).</>,
            default: true
        },
        {
            id: 2,
            title: 'Fitness & Lifestyle',
            content: <>I really like to keep fit and go to the <strong>gym</strong>, whether simply <strong>weight
                lifting</strong>, do some <strong>cardio</strong> or practice some <strong>kickboxing</strong>.</>,
            default: false
        },
        {
            id: 3,
            title: 'Personality & Mindset',
            content: <>
                A little a bit about my personality, I consider myself
                a <strong>faithful</strong> and <strong>hardworking</strong> individual.
                Usually, I tend to be a <strong>quiet</strong> person and talk usually when required, unless we are in a
                more
                informal environment.
                I like to keep things in a <strong>positive</strong> way and spread that whenever possible (i.e. when
                it's
                opportune to do so).
                Another of my traits, is that I think about several outcomes, which, in a way, can be applied to every
                aspect of life, whether in the workplace or on our daily lives.</>,
            default: false
        },
        {
            id: 4,
            title: 'Hobbies & Projects',
            content: <>
                One of my hobbies is simply playing around with my <strong>Proxmox VE</strong> server,
                creating virtual machines, <strong>LXC</strong> or <strong>Docker</strong> containers. I am also
                very interested developing web applications
                with <strong>Python</strong>, <strong>Flask</strong>, <strong>Rest
                APIs</strong> and/or <strong>React JS</strong>. Even though I am at an early stage when it comes
                to React JS, I feel very comfortable
                with <strong>Python</strong> and <strong>Flask</strong> (and <strong>Jinja2</strong> templating).</>,
            default: false
        },
        {
            id: 5,
            title: 'Thoughts & Future',
            content: <>
                The combination of <strong>Systems Administration</strong> and <strong>Web Development</strong> are
                two of my passions, as I enjoy creating new things. As a Sys Admin, I
                consider <strong>security</strong> essential, as my past roles consisted mostly on security audits.
                When it comes to the next couple of years, I see automation all over the place, as well as, remote
                work, which can be a good thing.
                In that sense, I am willing to learn new technologies and improve on them in order to catch up to
                future trends.
            </>,
            default: false
        }
    ]
    return (
        <div id="about" className="about">
            <div className="container">
                {
                    data.map((d) => (
                        <Accordion key={d.id} expanded={expanded === d.id} onChange={handleChange(d.id)}
                                   defaultExpanded={true}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}>
                                <Typography>{d.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {d.content}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </div>
        </div>
    )
}

export default About
