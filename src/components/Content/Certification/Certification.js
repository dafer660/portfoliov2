import React, {useState} from 'react'

import './Certification.scss'

import {handleSliderClick, handleTouchStart, handleTouchMove} from '../../../functions/slider'

import comptia from '../../../assets/certifications/CompTIA_A_ce.png'
import lfcs from '../../../assets/certifications/LFCS.png'
import udacity from '../../../assets/certifications/udacity.png'

const Certification = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null)

    const data = [
        {
            id: 1,
            logo: lfcs,
            description: 'Linux Foundation Certified Sys Admin',
            url: 'https://www.credly.com/badges/96316168-9f6d-40d4-bb68-50628c149616?source=linked_in_profile'
        },
        {
            id: 2,
            logo: comptia,
            description: 'Comptia A+ CE',
            url: 'https://www.credly.com/badges/7abe340b-538f-4b4d-8cef-800ca161c7ee?source=linked_in_profile'
        },
        {
            id: 3,
            logo: udacity,
            description: 'Full Stack Web Developer Program',
            url: 'https://confirm.udacity.com/HTMMHTAG'
        },
    ]

    return (
        <div id="certification" className="certification"
             onTouchStart={(e) => {
                 setTouchPosition(handleTouchStart(e))
             }}
             onTouchMove={(e) => {
                 const touched = handleTouchMove(e, touchPosition)
                 if (touched) {
                     setTouchPosition(touched.position)
                     setCurrentSlide(handleSliderClick(touched.direction, data, currentSlide))
                 }
             }}>
            <h1>Certifications</h1>
            <div className="certificationSlider" style={
                {
                    transform: `translateX(-${currentSlide * 100}vw)`,
                    overflow: 'hidden'
                }
            }>
                {data.map((d) => (
                    <div key={d.id} className="container">
                        <div className="item">
                            <div className="top">
                                <img className="logo" src={d.logo} alt='...'/>
                            </div>
                            <div className="bottom">
                                <div className="description">
                                    <h3>{d.description}</h3>
                                </div>
                                <div className="details">
                                    <a href={d.url}
                                       title={d.description}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Certificate URL
                                    </a>
                                </div>
                            </div>
                            <div className={'swiper'}>
                                <p>Swipe <span> right </span> or <span> left </span>for more</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certification
