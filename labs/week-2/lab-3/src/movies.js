// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let newArray = moviesArray.map(element => element.director);
    const result = [... new Set(newArray)];
    return result;    
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
    
    return Number((sum/moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    if (moviesArray.length === 0) return 0;
    let sum = 0;
    let divisor = 0;
    const array = moviesArray.filter((element) => element.genre.includes("Drama")).map((element) => element.score);
    if (array.length === 0)return 0;
    sum = array.reduce((acc, vrc) => acc+vrc, sum);
    console.log(array);
    console.log(sum/array.length);

    

    // moviesArray.forEach(element => {
    //     (element.genre.includes("Drama")) ? sum+=element.score : sum+=0
    // })
    // moviesArray.forEach(element => {
    //     (element.genre.includes("Drama")) ? divisor++ : divisor+=0
    // })
    // if (divisor === 0) return 0;
    //return Math.round((sum/divisor)*100)/100; 
    
    return Number((sum/array.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyArray = moviesArray.map((element) => element);
    let result = copyArray.sort((elementOne, elementTwo) => {
        if (elementOne.year < elementTwo.year) {
            return -1;
        } else if (elementOne.year > elementTwo.year){
            return 1;
        } else {
            if (elementOne.title < elementTwo.year) {
                return 1;
            } else {
                return -1;
            }
        }
    });
    
    return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copyArray = moviesArray.map((element) => element);
    let result = copyArray.sort((elementOne, elementTwo) => elementOne.title > elementTwo.title ? 1 : -1);
    let copyResult = result.map((element) => element.title);
    return copyResult.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const copyArray = moviesArray.map(a => ({...a}));

    let parseMinute = (time) => {
        let re = /(\d+)h\s+(\d+)min/;
        let match = re.exec(time);
        let hours = parseInt(match[1]);
        let minutes = parseInt(match[2]);
        return (hours * 60) + minutes;
    }
    let parseMinuteTwo = (time) => {
        let re = /(\d+)h/;
        let match = re.exec(time);
        let hours = parseInt(match[1]);
        return (hours * 60);
    }    
    
    for (let i=0; i < copyArray.length; i++){
        if (copyArray[i].duration.includes("m")){
            copyArray[i].duration = parseMinute(copyArray[i].duration);
        } else {
            copyArray[i].duration = parseMinuteTwo(copyArray[i].duration);
        }
    }
    
    return copyArray;
        
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;
    
    let movies = {};
    let moviesCounter = {};
    moviesArray.forEach((mov) => {
      if (movies[mov.year]) {
        movies[mov.year] += mov.score;
        moviesCounter[mov.year] ++;
      } else {
        movies[mov.year] = mov.score;
        moviesCounter[mov.year] = 1;
      }
    })

    for (let year in movies){
        movies[year] = movies[year]/moviesCounter[year];
    }
    
    let bestYear = null;
    let bestScore = 0;
    for (let year in movies){
        if (movies[year] > bestScore){
            bestYear = year;
            bestScore = movies[year];
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestScore}`;
}
