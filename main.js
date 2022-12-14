const jokecontainer = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokeBtn");
// const url = "https://icanhazdadjoke.com/";


jokebtn.addEventListener("click", getJoke);
getJoke()






function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        const joke1 = data.joke;
        jokecontainer.innerText = joke1;
    });
}



