let firstNames = ["Marija", "Lilly", "John", "Kylian "];
let lastNames = ["Spasova", "Colins", "Doe", "Mbappe"];

function fullName(firstNames, lastNames){
    let resultArray = [];
    for(let i = 0; i<firstNames.length; i++){
            const resultArray1 = `${i + 1} ${firstNames[i]} ${lastNames[i]}`;
            resultArray.push(resultArray1);
        }
        return resultArray;
} 

console.log(fullName(firstNames, lastNames));
