// const movies = require("./movies");
// const movieOrder = require("./movieOrder");
import movies from "./movies";
import movieOrder from "./movieOrder";

function getMovie(weeknum) {
  const apiKey = "fc5253c9";
  let weekPick = movieOrder[weeknum - 1];
  let movie = movies[weekPick];
  let omdbQuery = `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

  fetch(omdbQuery)
    .then(res => res.json())
    .then(data => {
      let poster = new Image();
      poster.src = data.Poster;
      document.body.appendChild(poster);
    })
    .catch(err => console.log(err));
}

getMovie(1);

// function getRange(max) {
//   i = 0;
//   movieRange = [];
//   while (i <= max) {
//     movieRange.push(i);
//     i++;
//   }
//   return movieRange;
// }

// function shuffle(arr) {
//   let currIndex = arr.length,
//     tempValue,
//     randomIndex;

//   while (0 !== currIndex) {
//     randomIndex = Math.floor(Math.random() * currIndex);
//     currIndex -= 1;

//     tempValue = arr[currIndex];
//     arr[currIndex] = arr[randomIndex];
//     arr[randomIndex] = tempValue;
//   }

//   return arr;
// }

// let movieOrderArray = getRange(29);
// let movieOrder = shuffle(movieOrderArray);
// console.log(movieOrder);
