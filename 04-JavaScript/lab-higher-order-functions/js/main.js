/* --------------------------------------------------------
 * Movie Data to use during lab
 */
const movies = [
  {
    title: 'Jurassic Park',
    year: 1993,
    genres: ['action', 'adventure', 'sci-fi'],
  },
  {
    title: 'Back to the Future',
    year: 1985,
    genres: ['adventure', 'comedy', 'sci-fi'],
  },
  {
    title: 'Aliens',
    year: 1986,
    genres: ['action', 'adventure', 'sci-fi'],
  },
  {
    title: 'Indiana Jones and the Raiders of the Lost Ark',
    year: 1981,
    genres: ['action', 'adventure'],
  },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
    genres: ['action', 'adventure', 'fantasy', 'sci-fi'],
  },
  {
    title: 'Total Recall',
    year: 1990,
    genres: ['action', 'sci-fi', 'thriller'],
  },
  {
    title: 'Mrs. Doubtfire',
    year: 1993,
    genres: ['comedy', 'drama', 'family'],
  },
  {
    title: 'Hook',
    year: 1991,
    genres: ['adventure', 'comedy', 'family'],
  },
  {
    title: 'Princess Mononoke',
    year: 1997,
    genres: ['animation', 'action', 'adventure'],
  },
  {
    title: 'The Matrix',
    year: 1999,
    genres: ['action', 'sci-fi'],
  },
  {
    title: 'Star Trek II: The Wrath of Khan',
    year: 1982,
    genres: ['action', 'adventure', 'sci-fi'],
  },
  {
    title: 'Toy Story',
    year: 1995,
    genres: ['animation', 'adventure', 'comedy'],
  },
  {
    title: 'I am Legend',
    year: 2007,
    genres: ['action', 'adventure', 'drama'],
  },
];

// inspect movies array
// console.table(movies);

function arrayForEach(arrayInput, callbackFunction) {
  // More code will go here later (in step 3)...
  for (let i = 0; i < arrayInput.length; i++) {
    callbackFunction(arrayInput[i]);
  }
}

arrayForEach(movies, (element) => {
  console.log(`Array element:\n ${element}`);
  if (element.title === 'Jurassic Park')
    console.log(`Movie.title: ${element.title}`)

})
console.log("------------Part 2---------------------")
// ------------------- 1 -------------------
/* Use the Array method .forEach() to loop through the movies array and console.log each movie title inside an inline anonymous 
function. You can look at the Documentation for Array.prototype.forEach() to get an idea of how this can be done. */

movies.forEach(movie => {
  console.log(movie);
})

// ------------------- 2 -------------------
console.log("/n/nUse the Array method .find() to search for a movie with the tile 'Total Recall'. Documentation for Array.prototype.find(). As a bonus challenge try to save the found movie in a variable.")

let question2 = movies.find((movie) => {
  console.log('question2');
  return movie.title === 'Total Recall';
})


console.log(question2);

// ------------------- 3 -------------------
console.log("Use the Array method .filter() to create a new array called ninetiesMovies that contains movies from only the nineties.")

let ninetiesMovies = movies.filter(movie => {
  return String(movie.year)[2] === '9';
})

console.log(ninetiesMovies);

// ------------------- 4 -------------------
console.log("Create a new array called moviesWithMappedIds as the returned value of mapping through the movies array. Use .map() to add a unique id to each movie. This could be set using the index value for each element in the array. Hint: in the documentation for Array.prototype.map() take a look at the index parameter. Make sure to return a new object out of map function instead of updating the existing one.")
const moviesWithMappedIds = movies.map((movie, index) => {
  movie.id = index;
  return movie;
})

console.log(moviesWithMappedIds);

// ------------------- 5 -------------------
console.log("Use the Array method .sort() to sort the movies array by year in descending order, from newest movie to oldest.")

console.log('movies before sorting:', movies, typeof movies);

let moviesCopy = [...movies];
console.log('copy of movies:', moviesCopy, typeof moviesCopy);
let sortedMovies = moviesCopy.sort((movie1, movie2) => {
  return movie2.year - movie1.year;
})


console.log('sorted movies:', sortedMovies);
console.log('original movies:', movies);

