// HOMEWORK PART 2
function dogsAge(humanAge){
    if(Number.isNaN(humanAge)){
        console.log("Invalid input!");
    }
    let dogsAge = humanAge * 7;
    return dogsAge;
}
// userInput = prompt("Enter the human age: ");
// convertedUserInput = Number(userInput);
// console.log(`The dog's age are ${dogsAge(convertedUserInput)}`);

function humanAge(dogsAge){
    if(Number.isNaN(dogsAge)){
        console.log("Invalid input!");
    }
    let humanAge = dogsAge / 7;
    return humanAge;
}
// userInput = prompt("Enter the dog age: ");
// convertedUserInput = Number(userInput);
// console.log(`The dog's age are ${humanAge(convertedUserInput)}`);

userChoise = prompt("Enter H for human age or D for dog age");
let userInput = prompt("Enter the age: ");
let convertedUserInput = Number(userInput);

if(userChoise === "H"){
    console.log(`The dog's ages  are ${dogsAge(convertedUserInput)}`);
} else if(userChoise === "D"){
    console.log(`The human ages are ${humanAge(convertedUserInput)}`);
}

