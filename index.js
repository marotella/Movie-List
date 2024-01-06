
//Variables
const form = document.querySelector("form")
//Callbacks
const addMovie = (evt) =>{
    evt.preventDefault()
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    let movieList = document.querySelector("ul");
    movieList.appendChild(movie)
    inputField.value = ""
}

//Event listeners
form.addEventListener("submit", addMovie)