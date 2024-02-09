// *HTML Form (SearchBar + 3 Button (Filter))
// * values von Form deklarieren (auslesen)
const moviesOuput = document.querySelector(".movieTable");
let allMovies = movies;

const moviesAll = movies.map((movieInfos) => {
  return (moviesOuput.innerHTML += `<div class="movieBox">
    <h3>${movieInfos[0]}</h3>
    <p>${movieInfos[1]}</p>
    <h4>${movieInfos[2]}</h4>
    <p>${movieInfos[3]}</p>
    <p>${movieInfos[4].map((genre) => genre).join(`<br>`)}</p>
    <p>${movieInfos[5]}</p>
  </div>`);
});

function showMovies(array) {
  array.map((movieInfos) => {
    return (moviesOuput.innerHTML += `<div class="movieBox">
          <h3>${movieInfos[0]}</h3> 
          <p>${movieInfos[1]}</p>
          <h4>${movieInfos[2]}</h4>
          <p>${movieInfos[3]}</p>
          <p>${movieInfos[4].map((genre) => genre).join(`<br>`)}</p>
          <p>${movieInfos[5]}</p>
        </div>`);
  });
}

function search() {
  const searchBar = document.querySelector("#searchbar").value.toLowerCase();
  //   allMovies = movies.filter((titel) => {
  //     return titel[0].toLowerCase().includes(searchBar);
  //   });
  allMovies = movies.filter(
    (movie) =>
      movie[0].toLowerCase().includes(searchBar.toLowerCase()) ||
      movie[1] === searchBar ||
      movie[2].toLowerCase().includes(searchBar.toLowerCase()) ||
      movie[3].toLowerCase().includes(searchBar.toLowerCase()) ||
      movie[4].map().toLowerCase().includes(searchBar.toLowerCase()) ||
      movie[5] === searchBar
  );
  moviesOuput.innerHTML = "";
  showMovies(allMovies);
}

function Up() {
  allMovies.sort(function (movie1, movie2) {
    return movie1[1] - movie2[1];
  });
  moviesOuput.innerHTML = "";
  showMovies(allMovies);
}

function Down() {
  allMovies.sort(function (movie1, movie2) {
    return movie2[1] - movie1[1];
  });
  moviesOuput.innerHTML = "";
  showMovies(allMovies);
}

function Rate() {
  allMovies.sort(function (movie1, movie2) {
    return movie2[5] - movie1[5];
  });
  moviesOuput.innerHTML = "";
  showMovies(allMovies);
}
