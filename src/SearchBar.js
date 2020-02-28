import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { searchArticles } from "./apitest";
import Select from "react-select";

const SearchBar = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [articleData, setArticleData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
  console.log("Article data", articleData)

  const performQuery = async e => {
    setError(null);
    setQuery(e);
    try {
      const articles = searchArticles(e);
      setArticleData(articles);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };

  const getOptions = data => {
    let options = [];
    if (!data || data.length === 0) {
      return;
    }
    let arrData = data.articles;
    console.log("ARRAY DATA", arrData)
    arrData.forEach(article => {
      options.push({
        value: `${article.id}`,
        label: `${article.title} - ${article.author}`,
      });
    });
    console.log(`OPTIONS`, options);
    return options;
  };

  const selectArticle = currArticle => {
    setSelectedArticle(currArticle);
  };

  return (
    <form className="SearchForm" onSubmit={event => event.preventDefault()}>
      {error && <div className="error">{error}</div>}
      <Select
        onInputChange={performQuery}
        inputValue={query}
        placeholder="Search"
        options={getOptions(articleData)}
        onChange={event =>  selectArticle(event)}
      />
      {/* onChange makes a getOptions promise -->
          getOptions makes API call, sets options state
          options state gets put into options prop for <Select />
      */}
      {selectedArticle && <SearchResults result={selectedArticle.value} />}
    </form>
  );
};

export default SearchBar;
