let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild.previousElementSibling;
console.log(lastDiv); 

function printNumbers (array, element) {
    const orderedList = document.createElement("ul");
    orderedList.id = 'numberList';
    for (const num of array) {
      orderedList.innerHTML += `<li>${num}</li>`;
      console.log(orderedList.innerHTML);
    }
    element.appendChild(orderedList);
    lastDiv.innerHTML += sum(array) + " \n ";

    lastDiv.innerHTML += wholeMathematicalEquation(array) +  " = " + sum(array);
}

printNumbers(array, lastDiv);

function sum(array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
    // console.log(sum);
}

function wholeMathematicalEquation(array){
    let result = "Whole Equation: ";
    result = array.join("+");
    // for (let number of array) {
    //     result += number.value;
    // }
    // result += sum(array);
    // return result;
    // console.log(result);
    return result;
}
wholeMathematicalEquation(array);



