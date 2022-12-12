function calculateAGE(birthYear){
    if(Number.isNaN(birthYear)){
        // console.log("Invalid input!");
        return "Invalid input!";
    }
    const currentYear = new Date().getFullYear()
    let age;
    age = Math.abs(birthYear - currentYear);
    console.log(`You are ${age} years old`);
}
calculateAGE(2000);
calculateAGE(1998);
calculateAGE(1974);
