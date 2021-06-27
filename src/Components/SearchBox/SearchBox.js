import React from 'react'
import './SearchBox.css'

const SearchBox = ({ oninputChange }) => {
    return (
        <div className="search_container">
            <input
                placeholder="Type Keywords Here"
                className="search_input"
                onChange={(event) => oninputChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBox
