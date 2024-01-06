
//Variables
const form = document.querySelector("form")
let movieList = document.querySelector("ul");

//Callbacks
const addMovie = (evt) =>{
    evt.preventDefault()
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie)
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);
    movieList.appendChild(movie);
    inputField.value = "";
}

const deleteMovie = (evt) => {
    evt.target.parentNode.remove();
}

//Event listeners
form.addEventListener("submit", addMovie);
