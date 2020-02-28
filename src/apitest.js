const API_KEY = `&apiKey=7c33092ea64d4e8990ae75778715703e`;
const URL = `http://newsapi.org/v2/everything?q=`;

const searchArticles = search => {
  let req = `${URL}${search}${API_KEY}`;
  if (search) {
    fetch(req)
    .then(function(response) {
        console.log(response.json());
    }).then(function(response) {
        return response;
    })
  }
};

export { searchArticles }
