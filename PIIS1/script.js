// 1. Запрос количества фильмов
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// 2. Создание объекта personalMovieDB
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

// 3. Запрос информации о фильмах
for (let i = 0; i < 2; i++) {
    let movie;
    let rating;

    // Проверка на валидность названия фильма
    while (true) {
        movie = prompt('Один из последних просмотренных фильмов?');
        if (movie && movie.length <= 50) break;
        alert('Пожалуйста, введите название фильма (не пустое и не длиннее 50 символов).');
    }

    // Проверка на валидность оценки
    while (true) {
        rating = prompt('На сколько оцените его?');
        if (rating && !isNaN(rating) && rating <= 10) break;
        alert('Пожалуйста, введите оценку (число) до 10.');
    }

    // 5. Запись данных в объект movies
    personalMovieDB.movies[movie] = rating;
}

// 6. Вывод объекта в консоль
console.log(personalMovieDB);