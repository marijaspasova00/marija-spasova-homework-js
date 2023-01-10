// HOMEWORK PART 3
// ATM  without prompt
function atmBalance(cashOut){
    let avilableBalance = 100000;
    let convertedAvilableBalance = Number(avilableBalance);

    let withdraw = convertedAvilableBalance - cashOut;
    if(convertedAvilableBalance >= cashOut){
        alert(`You have $ ${withdraw} left on your account.`);
    } else {
        alert("You don't have enough funds / You don't have enough money");
    }
}
atmBalance(25000);
atmBalance(105000);

// With prompt()
function atmBalance1(){
    let cashOut1 = prompt("How much money do you want to retrieve?");
    
    let avilableBalance1 = 100000;
    let convertedAvilableBalance1 = Number(avilableBalance1);
    
    let withdraw1 = convertedAvilableBalance1 - cashOut1;
    if(convertedAvilableBalance1 >= cashOut1){
        alert(`You have $ ${withdraw1} left on your account.`);
    } else {
        alert("You don't have enough funds / You don't have enough money");
    }
}
atmBalance1();
atmBalance1();




