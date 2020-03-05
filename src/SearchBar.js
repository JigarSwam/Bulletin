import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { searchArticles } from "./api";

let SearchBarTemp = () => {
  // const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const handleQueryChange = event => setQuery(event.target.value);

  const performQuery =  event => {
    event.preventDefault();
    searchArticles(query).then(resp => {
      setArticles(resp.articles)
    })
  };

  return (
    <form className="searchForm" onSubmit={performQuery}>
      <input
        name="query"
        type="text"
        value={query}
        onChange={handleQueryChange}
      />
      <div className="ButtonBar">
        <button type="submit" disabled={!query}>
          Search for Articles!
        </button>
      </div>
      {/* {error && <div className="error">{error}</div>} */}
      <SearchResults results={articles} />
    </form>
  );
};
export default SearchBarTemp;
