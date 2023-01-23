const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

const api = "EemaZMmdGm+ySkEJtj2hvQ==hHmj7jwUuMH5qKW9";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": api,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    joke.innerText = "Just Wait. . . . . .";
    btn.disabled = true;
    btn.innerText = "loadnig . . . ";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btn.disabled = false;
    btn.innerText = "Tell me a joke ";

    joke.innerText = data[0].joke;
  } catch (error) {
    joke.innerText =
      " sorry...!!! encountered a problem please try again later";

    btn.disabled = false;
    btn.innerText = "Tell me a joke ";
  }
}

btn.addEventListener("click", getJoke);
