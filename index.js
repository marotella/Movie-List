
//Variables
const form = document.querySelector("form")
let movieList = document.querySelector("ul");
let message = document.querySelector("#message");
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
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);
    movieList.appendChild(movie);
    inputField.value = "";
}

const deleteMovie = (evt) => {
    evt.target.parentNode.remove();
    message.textContent = evt.target.parentNode.querySelector("span").textContent+" successfully deleted!"
    revealMessage()
}

const crossOffMovie = (evt) => {
    evt.target.classList.toggle("checked");
    if (evt.target.classList.contains("checked") === true){
        message.textContent = evt.target.textContent + " watched!"
    } else {
        message.textContent = evt.target.textContent + " added back!"
    }
    revealMessage()

} 

const revealMessage = () =>{
    message.classList.remove("hide")
    setTimeout ( () => {message.classList.add("hide")}, 1000)
}

//Event listeners
form.addEventListener("submit", addMovie);
