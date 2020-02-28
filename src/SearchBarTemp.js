import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { searchArticles } from "./apitest";
import Select from "react-select";


let SearchBarTemp = () => {
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('')
    const [articles, setArticles] = useState([])

    const handleQueryChange = event => setQuery(event.target.value)

    const performQuery = async event => {
        event.preventDefault()
        setError(null)
        try {
          const result = await searchArticles(query)
          setArticles(result.articles)
        } catch (error) {
          setError('Sorry, but something went wrong.')
        }
      }

    return (
        <form className="searchForm" onSubmit={performQuery}>
            <input name="query" type="text" value={query} onChange={handleQueryChange} />
        <SearchResults results={articles} />
        </form>
    )
}
export default SearchBarTemp