"use strict";


let numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastMove1 = prompt('Один з останніх переглянутих фільмів?', ''),
    lastMove2 = prompt('Один з останніх переглянутих фільмів?', ''),
    rating1 = prompt(`На скільки оцінюєте ${lastMove1}?`),
    rating2 = prompt(`На скільки оцінюєте ${lastMove2}?`);

personalMoveDB.movies[lastMove1] = rating1;
personalMoveDB.movies[lastMove2] = rating2;

console.log(personalMoveDB);
