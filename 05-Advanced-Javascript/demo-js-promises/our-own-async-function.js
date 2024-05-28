const NEWS_API_KEY = '911bcf97db2f46f0b686997359c2de01';
const newsStatusEl = document.querySelector('.news-status');
const newsResultsEl = document.querySelector('.news-results');

class NewsAPI {
  constructor(apiKey) {
    this.newsApiURL = 'https://newsapi.org/v2/top-headlines?country=ca';
    this.apiKey = apiKey;
  }

  async getTopHeadlines() {
    const newsApiResponse = await axios.get(`${this.newsApiURL}&apiKey=${this.apiKey}`);
    const newsArticlesData = newsApiResponse.data;
    return newsArticlesData.articles;
  }
}

const newsApi = new NewsAPI(NEWS_API_KEY);

const getLatestNews = async () => {
  try {
    // All I want to do is call newsApi.getTopHeadlines and get an array of articles
    // getTopHeadlines returns a promise so we need to await to get the result
    const newsArticles = await newsApi.getTopHeadlines();

    newsStatusEl.innerText = '';

    renderNews(newsArticles);
  } catch(err) {
    console.log('Promise rejected');
    console.log("Couln't fetch the API response", err);
  }
}

getLatestNews();

newsStatusEl.innerText = 'Fetching articles for you...';


function renderNews(newsData) {
  newsData.forEach((newsObj) => {
    const newsLi = document.createElement('li');
    newsLi.innerText = newsObj.title;
    newsResultsEl.appendChild(newsLi);
  });
}