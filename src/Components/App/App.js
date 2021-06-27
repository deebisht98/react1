import './App.css'
import React from 'react'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import Results from '../Results/Results'

const name = require('@rstacruz/startup-name-generator')

function App() {
    const [min, setMin] = React.useState(true)
    const [results, setResults] = React.useState([])

    const handleInputChange = (value) => {
        value ? setMin(false) : setMin(true)
        if (value) {
            setResults(name(value))
        } else {
            setResults([])
        }
    }

    return (
        <div className="App">
            <Header headerExpanded={min} />
            <SearchBox oninputChange={handleInputChange} />
            <Results suggestedNames={results} />
        </div>
    )
}

export default App
