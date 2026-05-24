function jokeGenerator(response) {


  let answer = response.data.answer;

  new Typewriter("#joke", {
    strings: answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function getAnswer(event) {
  event.preventDefault();

  let userInput = document.querySelector("#userInput");

  let prompt = `User instructions: Generate a funny joke about ${userInput.value}`;
  let context =
    "You are comedy writer. Always write jokes diffefrently. Do not repitwording or templates. You must write a new joke each time. Write each line of the joke on a new line using the <br /> tag";
  let apiKey = "e2564f39e1f4c4aa4bf09cftodd0583e";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<div class="generating">⏳ Generating a joke about ${userInput.value}</div>`;

  axios.get(apiUrl).then(jokeGenerator);
}

let jokeButton = document.querySelector("button");
jokeButton.addEventListener("click", getAnswer);
