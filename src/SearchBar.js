import React, { useState } from "react";
import SearchResults from "./SearchResults";
import searchArticles from "./api";
import Select from "react-select";

const SearchBar = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [articleData, setArticleData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});

  const performQuery = async e => {
    setError(null);
    setQuery(e);
    try {
      const articles = await searchArticles(e);
      setArticleData(articles);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };

  const getOptions = data => {
    let options = [];
    if (data.length === 0) {
      return;
    }
    let arrData = data.articles;
    arrData.forEach(article => {
      options.push({
        label: `${article.title} - ${article.author}`,
        value: `${article.id}`
      });
    });
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
        placeHolder="Search"
        options={getOptions(articleData)}
        onChange={event => selectArticle}
      />
      {selectedArticle && <SearchResults results={selectedArticle.value} />}
    </form>
  );
};

export default SearchBar;
