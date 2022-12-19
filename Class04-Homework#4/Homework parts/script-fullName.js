let firstNames = ["Marija", "Lilly", "John", "Kylian "];
let lastNames = ["Spasova", "Colins", "Doe", "Mbappe"];
function fullName(firstNames, lastNames){
    let resultArray = [];
    for(let i = 0; i<firstNames.length; i++){
            resultArray.push(`${i + 1} ${firstNames[i]} ${lastNames[i]}`);
            console.log(resultArray[i]);
        }
} 

// console.log(resultArray);
// fullName(resultArray);
