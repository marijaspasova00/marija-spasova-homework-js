function weightInChickens(weightKG){
    let result =  weightKG / 0.5;
    return result;
}
let result = document.getElementById("result");
let userInput = prompt("Enter the weight in kg: ");
let convertedUserInput = Number(userInput);
if(!isNaN(convertedUserInput)){
    result.innerHTML = `<h3> ${convertedUserInput}KG is ${weightInChickens(convertedUserInput)} </h3`
} else {
    result.innerHTML = `<h3> Invalid input! </h3>`
}