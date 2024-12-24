const movies = [
    { title: "interstellar", genre: "Sci-Fi", rating: 8.7, releaseYear: 2014 },
    { title: "John Wick ", genre: "Thriller", rating: 7.4, releaseYear: 2014 },
    { title: "Avengers: Endgame", genre: "Sci-Fi", rating: 8.4, releaseYear: 2019 },
]


const addMovie = (collection, movie) => {
    collection.push(movie);
};




addMovie(movies,{ title: "Captain America : Civil War", genre: "Adventure", rating: 7.8, releaseYear: 2016 });
console.log(movies);


const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};


console.log(listMoviesByGenre(movies, "Sci-Fi"));


const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};


console.log(findHighestRatedMovie(movies));


const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};


console.log(getMovieTitles(movies));


const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};


console.log(moviesAfterYear(movies, 2010));


movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});









