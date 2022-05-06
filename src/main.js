

/* Objective
This file sets forth the algorithms needed to finalize the price at which a consumer will be charged for his/her purchase of a deli, prepared food, or other perishable product ("Product") at checkout.
*/



//Bento_A = 

const EDT_1 = new Date('4/13/2022 11:00:00 AM UTC');

console.log(EDT_1);

let item1 = {barcodeID: 2001041123001 , itemname: "Bento_std", EDT: EDT_1, price: 700};

console.log(item1);

const currentTime =  Date.now();
console.log("currentTime is", currentTime);

const timeToEDT_1 = EDT_1 - currentTime;

console.log("timeToEDT_1 is ", timeToEDT_1);

function discPrice(timeToEDT, price) {
    //EDT = EDT_1;
    //price = item1.price;

    if (timeToEDT < (5*60*60*1000)) {
        discPrice = price*0.9;
    }
    else discPrice = price;
    return discPrice
}

finalPrice = discPrice(timeToEDT_1, item1.price);

console.log("finalPrice is ", finalPrice);
