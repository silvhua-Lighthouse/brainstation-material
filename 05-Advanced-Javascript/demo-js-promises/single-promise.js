const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=ca';
const NEWS_API_KEY = '911bcf97db2f46f0b686997359c2de01';
const newsStatusEl = document.querySelector('.news-status');
const newsResultsEl = document.querySelector('.news-results');

// Calling an axios method returns a promise object
const newsApiRequest = axios.get(`${NEWS_API_URL}&apiKey=${NEWS_API_KEY}`);

console.log(newsApiRequest);


// If I want results of a promise, not just the promise object, we need to create an async function with await on the promise object inside of it, wrapped in try/catch

const getLatestNews = async () => {
  try {
    // Promise fullfilment branch
    const newsApiResponse = await axios.get(`${NEWS_API_URL}&apiKey=${NEWS_API_KEY}`);

    // What we get back from awaiting on axios.get is the axios response object
    console.log(newsApiResponse);

    // To get access to the data itself, you'll find it in response.data
    console.log(newsApiResponse.data);

    const newsArticlesData = newsApiResponse.data;

    // Reset the news status text
    newsStatusEl.innerText = '';

    // Render articles to the page
    renderNews(newsArticlesData.articles);
  } catch(err) {
    // Promise rejection branch
    console.log('Promise rejected');
    console.log("Couln't fetch the API response", err);
  }
}

// Invoke the async function
getLatestNews();

// This synchronous bit of code will run right after getLatestNews invokation, without needing to wait for the results
newsStatusEl.innerText = 'Fetching articles for you...';


function renderNews(newsData) {
  newsData.forEach((newsObj) => {
    const newsLi = document.createElement('li');
    newsLi.innerText = newsObj.title;
    newsResultsEl.appendChild(newsLi);
  });
}