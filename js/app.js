
const app = angular.module('MovieApp', []);

app.controller('FavoritesController', ($scope, MovieService) => {

});

app.controller('ShowMoviesController', ($scope, MovieService) => {
    $scope.movies = MovieService.getMovies();

    $scope.favoriteMovie = (count, target) => {
        console.log(`${target.title} is ${count} stars!`);        target.markAsFavorite = count;
    };
});

app.factory('MovieService', ($http) => {
    const movies = [];

    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=1f2455004d5eb8b8ccb218186171de29').then(function (response) {
        angular.copy(response.data.results, movies);
    });

    return {
        addMovie(movie) {
            movies.push(movie);
        },
        getMovies() {
            return movies;
        },
        // markAsFavorite(goodie) {
        //     goodie.isFavorite = true;
        // },
    };
});