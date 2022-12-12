function celsiusToFahrenheit(userInputCelsius){
    if(Number.isNaN(userInputCelsius)){
        return "Invalid Input!";
    }
    let result;
    result = ((userInputCelsius*1.8)+32);
    return result;
}

function fahrenheitToCelsius(userInputFahrenheit){
    if(Number.isNaN(userInputFahrenheit)){
        return "Invalid input!";
    }
    let result;
    result = ((5/9) * (userInputFahrenheit - 32));
    return result;
}
// let userChoiseLower = userChoise.toLowerCase();
let userChoise = prompt("C for celsius or F for fahrenheit: ")
let userInput = prompt("Enter the value: ");
let convertedUserInput = Number(userInput);

if(userChoise === "C"){
    console.log(`The value from celsius to fahrenheit is: ${celsiusToFahrenheit(userInput)} F`);
}
else if(userChoise === "F"){
    console.log(`The value from celsius to fahrenheit is: ${fahrenheitToCelsius(userInput)} C`);
}