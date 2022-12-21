// HOMEWORK PART #2
let array = [1, 2, 3, 4, 5]
function sum (array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        // let num = 0;
        if(!validateNum(i)){
            continue;
        }
        sum += array[i];
    }
    return sum;
}
let sumOfNums = sum(array);
console.log(`The sum of nums is ${sum(array)}`);
// console.log(sum(array));

// BONUS

function validateNum(num){
    if(typeof(num)!== "number"){
        return false;    
    } 
        return true; 
}
// let func = validateNum("9");
// console.log(func);