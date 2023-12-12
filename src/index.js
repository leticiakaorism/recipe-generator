function displayRecipe(response) {
    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    
}


function generateRecipe(event) {
    event.preventDefault();



let instructionsInput = document.querySelector("#instructions-recipe");
let capitalizedInput = instructionsInput.value.charAt(0).toUpperCase() + instructionsInput.value.slice(1);

apiKey = "232do9057abbbe75ece0tff744ed37df"
let prompt = `User instructions: Generate a delicious recipe of ${capitalizedInput}`;
let context ="You are a really well-experienced vegan chef, and like doing adapting animal-based recipes into delicious vegan food. Your mission is to generate adaptation for  delicious and easy vegan recipe for someone that's is a beginner. Make sure to follow the user insructions bellow and make it a short recipe. Write the recipe using this little example: <p><strong>Title</strong></p><br /><p>step 1</p><br /><p>step 2</p><br /><p>step 3</p>";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `<div class="generating">⏳ Generating a delicious Vegan ${capitalizedInput} recipe...</div>`

console.log("GENERATING");
console.log(`prompt: ${prompt}`);
console.log(`context:${context}`)
axios.get(apiUrl).then(displayRecipe);

   
}


let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
