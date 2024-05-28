const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=ca';
const NEWS_API_KEY = '911bcf97db2f46f0b686997359c2de01';
const newsStatusEl = document.querySelector('.news-status');
const newsResultsEl = document.querySelector('.news-results');

// With .then/.catch you do not need a separate function
axios
  .get(`${NEWS_API_URL}&apiKey=${NEWS_API_KEY}`)
  .then((newsApiResponse) => {
    // .then takes a callback with the result as a parameter

    console.log(newsApiResponse);

    console.log(newsApiResponse.data);

    const newsArticlesData = newsApiResponse.data;

    newsStatusEl.innerText = '';

    renderNews(newsArticlesData.articles);
  })
  .catch((err) => {
    // .catch takes a callback with the error as a parameter

    console.log('Promise rejected');
    console.log("Couln't fetch the API response", err);
  });


newsStatusEl.innerText = 'Fetching articles for you...';


function renderNews(newsData) {
  newsData.forEach((newsObj) => {
    const newsLi = document.createElement('li');
    newsLi.innerText = newsObj.title;
    newsResultsEl.appendChild(newsLi);
  });
}