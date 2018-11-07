// const movies = require("./movies");
// const movieOrder = require("./movieOrder");
import movies from "./movies";
import movieOrder from "./movieOrder";
import moment from "moment";

let whoseChoice = document.querySelector("#whoseChoice");
let movieTitle = document.querySelector("#movieTitle");
let moviePoster = document.querySelector("#moviePoster");
let director = document.querySelector("#director");
let cast = document.querySelector("#cast");
let moviePlot = document.querySelector("#moviePlot");

function getMovie(weeknum) {
  const apiKey = "fc5253c9";
  let weekPick = movieOrder[weeknum];
  let movie = movies[weekPick];
  let omdbQuery = `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

  if (weekPick >= 0 && weekPick <= 4) {
    whoseChoice.innerText = "Brad's Choice";
  } else if (weekPick >= 5 && weekPick <= 9) {
    whoseChoice.innerText = "Dale's Choice";
  } else if (weekPick >= 10 && weekPick <= 14) {
    whoseChoice.innerText = "Tim's Choice";
  } else if (weekPick >= 15 && weekPick <= 19) {
    whoseChoice.innerText = "Ted's Choice";
  } else if (weekPick >= 20 && weekPick <= 24) {
    whoseChoice.innerText = "Scott's Choice";
  } else if (weekPick >= 25 && weekPick <= 29) {
    whoseChoice.innerText = "Darcy's Choice";
  }

  fetch(omdbQuery)
    .then(res => res.json())
    .then(data => {
      // let poster = new Image();
      // poster.src = data.Poster;
      // document.body.appendChild(poster);
      moviePoster.innerHTML = `<img src="${data.Poster}" alt="${data.Title}"/>`;
      movieTitle.innerText = `${data.Title} (${data.Year})`;
      director.innerText = data.Director;
      cast.innerText = data.Actors;
      moviePlot.innerText = data.Plot;
      // console.log(data);
    })
    .catch(err => console.log(err));
}

function getWeek() {
  const startDate = moment([2018, 9, 30]);
  let now = moment();

  return now.diff(startDate, "weeks");
}

let week = getWeek();
getMovie(week);

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
