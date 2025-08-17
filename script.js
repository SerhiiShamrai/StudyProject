"use strict";

let personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    writeYourGenres: function ()
    {
        for (let i = 0; i < 1; i++)
        {
            let favoriteGenre = prompt(`Введіть Ваші улюблені жанри фільмів через кому`).split(', ');
            if (!favoriteGenre)
            {
                console.log('Ви ввели некоректні дані!');
                i--;
            }
            else
            {
                favoriteGenre.sort();
                personalMovieDB.genres = favoriteGenre;
            }
        }


        personalMovieDB.genres.forEach( function(value, count)
        {
           console.log(`Улюблений жанр №${count + 1} - це ${value}`);
        });
    },

    showMyDB: function (hidden)
    {
        if (!hidden)
        {
            console.log(hidden);
        }
    },

    detectPersonalLevel: function ()
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
    },

    rememberMyFilms: function ()
    {
        for (let i = 0; i < 2; i++)
        {
            let lastMovie = prompt('Один з останніх переглянутих фільмів?', '').trim(),
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
    },

    start: function ()
    {
        do
        {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        }   while (!personalMovieDB.count || isNaN(personalMovieDB.count));
    },

    toggleVisibleMyDB: function ()
    {
        personalMovieDB.privat = !personalMovieDB.privat;
        console.log(personalMovieDB.privat);
    }
};





