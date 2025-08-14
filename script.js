"use strict";

let numberOfFilms;

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

rememberMyFilms();

detectPersonalLevel();

showMyDB(personalMovieDB.private);

writeYourGenres();

function writeYourGenres()
{
    for (let i = 0; i < 3; i++)
    {
        let favoriteGenre = prompt(`Ваш улюблений жанр під номером ${i + 1}?`);
        if (!favoriteGenre)
        {
            i--;
        }
        else
        {
            personalMovieDB.genres[i] = favoriteGenre; 
        } 
    }
}

function showMyDB(hidden)
{
    if (!hidden)
    {
        console.log(personalMovieDB);
    }
}


function detectPersonalLevel() 
{
    if (personalMovieDB.count <= 10) 
    {
        alert('Переглянуто доволі мало фільмів');
    }
    else if (personalMovieDB.count >= 30) 
    {
        alert('Ви кіноман');
    }
    else if (isNaN(personalMovieDB.count)) 
    {
        alert('Виникла помилка');
    }
    else 
    {
        alert('Ви класичний глядач');
    }
}

function rememberMyFilms() 
{
    for (let i = 0; i < 2; i++) 
    {
        let lastMovie = prompt('Один з останніх переглянутих фільмів?', ''), 
            rating = prompt(`Як оціните фільм?`, '');
        if (!lastMovie || lastMovie.length > 50 || !rating || rating.length > 50) 
        {
            console.log('error!');
            i--;
        }
        else 
        {
            personalMovieDB.movies[lastMovie] = rating;
            console.log('done!');
        }
    }
}


function start() 
{
    do 
    {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }   while (!numberOfFilms || isNaN(numberOfFilms));
}


