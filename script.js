let bill = 120;
let numberOfPeople = 5;
let serviceQuality = `Great`;

function calculateTip(quality) {
    if(quality === 'Great') {
        return bill * .2
    }
    else if(quality === 'Good') {
        return bill * .15
    }
    else if(quality === 'Poor') {
        return bill * .10
    }
    else {

    }
  
};

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill,tip){
    return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calculateAmountPerPerson(totalBill, numberOfPeople){
    return totalBill / numberOfPeople
}

let amountPerPerson = totalBill / numberOfPeople

console.log ('Tip: $' + tip)
console.log ('Total Bill: $' + totalBill)
console.log ('Amount per person: $' + amountPerPerson)






































