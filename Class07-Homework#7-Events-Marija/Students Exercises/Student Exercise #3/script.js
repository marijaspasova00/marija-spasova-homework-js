let inputs = document.getElementById("user__inputs").children;
let result = document.getElementById("result");
let button = document.getElementById("submit__btn");

function getUserInformations(inputElements){
    let result = "User: ";
    for (let input of inputElements) {
        result += input.value + " ";
    }
    result += "is registered!"
    return result;
}
button.addEventListener("click", function(){
    result.innerText = getUserInformations(inputs);
});