import React from 'react'
import './NameCard.css'

const url = 'https://www.namecheap.com/domains/registration/results/?domain='

const NameCard = ({ value }) => {
    return (
        <a href={`${url}${value}`} target="_blank" rel="noreferrer">
            <div className="result-name-card">
                <p className="result-name">{value}</p>
            </div>
        </a>
    )
}

export default NameCard
