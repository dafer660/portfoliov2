import React from 'react'

import './Certification.scss'

import comptia from '../../../assets/certifications/CompTIA_A_ce.png'
import lfcs from '../../../assets/certifications/LFCS.png'
import udacity from '../../../assets/certifications/udacity.png'

const Certification = () => {
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
        <div id="certification" className="certification">
            <h1>Certifications</h1>
            <div className="container">
                {data.map((d) => (
                    <div key={d.id} className="card">
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certification
