function jokeGenerator(response) {
  let answer = response.data.answer;

  new Typewriter("#joke", {
    strings: answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function getAnswer() {
  let prompt = "Tell me a joke ";
  let context =
    "You are comedy writer. Always write jokes diffefrently. Do not repitwording or templates. You must write a new joke each time.";
  let apiKey = "e2564f39e1f4c4aa4bf09cftodd0583e";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(jokeGenerator);
}

let jokeButton = document.querySelector("button");
jokeButton.addEventListener("click", getAnswer);
