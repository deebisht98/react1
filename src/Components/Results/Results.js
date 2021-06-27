import React from 'react'
import './Results.css'
import NameCard from '../NameCard/NameCard'

const Results = ({ suggestedNames }) => {
    return (
        <div className="results_container">
            {suggestedNames.map((elem) => (
                <NameCard key={elem} value={elem} />
            ))}
        </div>
    )
}

export default Results
