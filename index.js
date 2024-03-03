function displayPoem(response){
    
    new Typewriter("#poem", {
        strings: response.data.answer, 
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }


function generatePoem(event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "1de043300tfb174cf1a30ef403a9aobc";
let context = 
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with `SheCodes AI` in bold inside a <strong> element at the end of the poem";

let prompt = `User instructions: Generate a poem about seduction ${instructionsInput.value}`;

let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">🕒 Generating a poem about ${instructionsInput.value}</div>`;

   

axios.get(apiURL).then (displayPoem);

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);