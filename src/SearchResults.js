import React from 'react'

const SearchResults = (props) => {
    return (
    <div className="searchResults">
        {props.results && props.results.map(article => <p>{article.title}</p> )}
    </div>
    )
}


export default SearchResults