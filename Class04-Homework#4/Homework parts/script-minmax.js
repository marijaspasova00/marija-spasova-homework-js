const numberArray = [13, -15, 1, 0, 55, -3];
function sumOfMinAndMax(array){
    let max = -Infinity; 
    let min = +Infinity;
    let sum = 0;
    for(let num of array){
        if(num >= max){
            max = num;
        } if(num <= min){
            min = num;
        }
    }
    console.log(`${max}\n${min}`);
    return (sum = max + min);
}
console.log(sumOfMinAndMax(numberArray));