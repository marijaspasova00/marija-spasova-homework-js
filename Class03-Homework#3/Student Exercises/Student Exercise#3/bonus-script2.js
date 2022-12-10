function calculateAGE(birthYear){
    const currentYear = new Date().getFullYear()
    let age;
    age = Math.abs(birthYear - currentYear);
    console.log(`You are ${age} years old`);
}
calculateAGE(2000);
calculateAGE(1998);
calculateAGE(1974);
