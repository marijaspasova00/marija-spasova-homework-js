function calculateAge(birthYear, currentYear){
    if(Number.isNaN(birthYear) || Number.isNaN(currentYear)){
        // console.log("Invalid input!");
        return "Invalid input!";
    }
    let age = Math.abs(birthYear - currentYear);
    console.log(`You are ${age} years old`);
    // return age;
}
// let userInputBirthYear = prompt("Enter the birth year: ");
// let converteduserInputBirthYear = Number(userInputBirthYear);
// let userInputCurrentYear = prompt("Enter the current year");
// let convertedUserInputCurrentYear = Number(userInputCurrentYear);
// console.log(`You are ${calculateAge(convertedUserInputBirthYear, convertedUserInputCurrentYear)} years old`);

calculateAge(2000, 2022);
calculateAge(1998, 2022);
calculateAge(1974, 2022);