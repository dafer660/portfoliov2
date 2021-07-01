import React, {useEffect, useState} from 'react'

import Modal from "../../UI/Modal/Modal";

import Markdown from 'markdown-to-jsx';

import './Roadmap.scss'
import arrowRight from '../../../assets/svg/chevron-right.svg'
import arrowLeft from '../../../assets/svg/chevron-left.svg'
import img from '../../../assets/images/ritz_carlton_logo.png'


const Roadmap = () => {
    const [currentFile, setCurrentFile] = useState('001_systems_supervisor.md')
    const [currentLogo, setCurrentLogo] = useState(img)
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null)

    const data = [
        {
            id: 1,
            title: 'Systems Supervisor',
            sector: 'Information Technology',
            location: 'Sintra, Portugal',
            filename: '001_systems_supervisor.md',
            logo: 'ritz_carlton_logo.png',
            url: 'https://www.ritzcarlton.com',
            start_date: <h3>From the 1<span>st</span> of April 2019</h3>,
            end_date: <h3>To the 25<span>th</span> of March 2020</h3>
        },
        {
            id: 2,
            title: 'Assistant Manager of IT',
            sector: 'Information Technology',
            location: 'London, United Kingdom',
            filename: '002_assist_man_it.md',
            logo: 'marriott_logo.png',
            url: 'https://www.marriott.com',
            start_date: <h3>From the 19<span>th</span> of February 2018</h3>,
            end_date: <h3>To the 25<span>th</span> of March 2019</h3>
        },
        {
            id: 3,
            title: 'Helpdesk Support',
            sector: 'Information Technology',
            location: 'Sintra, Portugal',
            filename: '003_helpdesk_support.md',
            logo: 'ritz_carlton_logo.png',
            url: 'https://www.ritzcarlton.com',
            start_date: <h3>From the 1<span>st</span> of May 2015</h3>,
            end_date: <h3>To the 2<span>nd</span> of December 2016</h3>
        }
    ]

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target && e.target.className === 'modal display-block') {
                return setOpen(false);
            }
        };
        if (open) {
            window.addEventListener("click", handleClick);
        }
    }, [open, setOpen]);

    useEffect(() => {
        import(`../../../assets/md/${currentFile}`)
            .then((res) => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setText(res))
            })
            .catch(err => console.log(err))
    }, [currentFile, setCurrentFile])

    useEffect(() => {
        import(`../../../assets/images/${currentLogo}`)
            .then((res) => {
                setCurrentLogo(res.default)
            })
            .catch(err => null)
    }, [currentLogo, setCurrentLogo])

    useEffect(() => {
        setCurrentLogo(data[currentSlide].logo)
    }, [currentSlide, setCurrentSlide])

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleShowModal = (filename) => {
        setCurrentFile(filename)
        setOpen(true)
    };

    const handleHideModal = () => {
        setOpen(false)
    };

    const handleSliderClick = (direction) => {
        if (direction === 'left') {
            if (currentSlide > 0) {
                setCurrentSlide(currentSlide - 1)
            } else {
                setCurrentSlide(2)
            }
        } else {
            if (currentSlide < data.length - 1) {
                setCurrentSlide(currentSlide + 1)
            } else {
                setCurrentSlide(0)
            }
        }
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 10) {
            handleSliderClick()
        }

        if (diff < -10) {
            handleSliderClick('left')
        }

        setTouchPosition(null)
    }

    return (
        <div id="roadmap" className="roadmap" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <Modal show={open} handleClose={handleHideModal}>
                <div className="modalContainer">
                    <Markdown className='markdownContainer'>
                        {text}
                    </Markdown>
                </div>
            </Modal>
            <div className="roadmapSlider"
                 style={
                     {
                         transform: `translateX(-${currentSlide * 100}vw)`,
                         overflow: 'hidden'
                     }
                 }>
                {data.map((d) => (
                    <div key={d.id} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="imgContainer">
                                    <a href={d.url}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <img src={currentLogo} alt="..."/>
                                    </a>
                                </div>
                            </div>
                            <div className="right">
                                <div className="itemTitle">
                                    {d.start_date}
                                    {d.end_date}
                                </div>
                                <div className="itemList">
                                    <ul>
                                        <li>Title: <span>{d.title}</span></li>
                                        <li>Sector: <span>{d.sector}</span></li>
                                        <li>Location: <span>{d.location}</span></li>
                                    </ul>
                                    <span className={'extraDetails'} onClick={() => handleShowModal(d.filename)}>Extra Details</span>
                                </div>
                            </div>
                            <div className={'swiper'}>
                                <p >Swipe <span> right </span> or <span> left </span>for more</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={arrowLeft} alt={'<<'} className="arrow left" onClick={() => handleSliderClick('left')}/>
            <img src={arrowRight} alt={'>>'} className="arrow right" onClick={() => handleSliderClick()}/>
        </div>
    )
}

export default Roadmap
