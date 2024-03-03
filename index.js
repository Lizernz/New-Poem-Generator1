function displayPoem(response){
    //response.data.answer
    new Typewriter("#poem", {
        strings: response.data.answer, //as strings for the type writer to read
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
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem";

let prompt = `User instructions: Generate a poem about seduction ${instructionsInput.value}`;

    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    //Make a call to the API
    //display the generated poem

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`context: ${context}`);

axios.get(apiURL).then (displayPoem);

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);