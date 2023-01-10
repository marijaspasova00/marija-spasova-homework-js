let array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9, 11, 13, 15, 17, 12];
function findNumber(array, type){
    let resultArray = [];
    // let counterEven = 0;
    // let counterOdd = 0;
    if(type === "even"){
        // for(let i = 0; i<array.length; i++)
        for(let num of array) {
            if(num % 2 === 0){
                resultArray.push(num);
            }
        }
        return resultArray;
    }else if(type === "odd"){
        for(let num of array){
            if(num % 2 !== 0){
                resultArray.push(num);
            }
        }
        return resultArray;
    }else{
        console.log(`Invalid input! Please enter odd or even!`);
        return -1;
    }
}
// console.log(findNumber(array, "even"));
let findNum = findNumber(array, "odd");
console.log(findNum);
let findNum1 = findNumber(array, "odd");
console.log(findNum1);
let findNum2 = findNumber(array, "hhsja");
console.log(findNum2);

