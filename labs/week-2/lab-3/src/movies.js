// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let newArray = new Array;
    moviesArray.forEach(element => {
        newArray.push(element.director)});
    return newArray;    
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counter = 0;
    moviesArray.forEach(element => {
        if (element.director === "Steven Spielberg" &&
        element.genre.includes("Drama")){
            counter++;
        }
    });
    return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let sum = 0;
    moviesArray.forEach(element => {
        element.score ? sum+=element.score : sum+=0
    })
    return Math.round((sum/moviesArray.length)*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    if (moviesArray.length === 0) return 0;
    let sum = 0;
    let divisor = 0;

    moviesArray.forEach(element => {
        (element.genre.includes("Drama")) ? sum+=element.score : sum+=0
    })
    moviesArray.forEach(element => {
        (element.genre.includes("Drama")) ? divisor++ : divisor+=0
    })
    if (divisor === 0) return 0;
    return Math.round((sum/divisor)*100)/100; 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
