let userInput = prompt("Enter the year: ");
let convertedUserInput = Number(userInput);

if(Number.isNaN(convertedUserInput)){
    alert("Invalid input!");
    return "Invalid input!";
}
// let year;
let zodiac = ((convertedUserInput-4)%12);


console.log(zodiac);

if(zodiac === 0){
    console.log("Rat");
}
else if(zodiac === 1){
    console.log("Ox");
}
else if(zodiac === 2){
    console.log("Tiger");
}
else if(zodiac === 3){
    console.log("Rabbit");
}
else if(zodiac === 4){
    console.log("Dragon");
}
else if(zodiac === 5){
    console.log("Snake");
}
else if(zodiac === 6){
    console.log("Horse");
}
else if(zodiac === 7){
    console.log("Goat");
}
else if(zodiac === 8){
    console.log("Monkey");
}
else if(zodiac === 9){
    console.log("Rooster");
}
else if(zodiac === 10){
    console.log("Dog");
}
else if(zodiac === 11){
    console.log("Pig");
}