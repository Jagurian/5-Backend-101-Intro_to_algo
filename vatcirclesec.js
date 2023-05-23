

const priceWithoutVat = 123;
const priceWithVatt = priceWithVat(priceWithoutVat);
function priceWithVat (priceWithoutVat) {
    const vatPour = 0.21;
    const vat = priceWithoutVAT * vatPour;
    const priceWithVat = priceWithoutVat + vat;
    return priceWithVat;
}


console.log("Price with VAT:", priceWithVatt);



const radius = 5;
const surfArea = calsurf(radius);
console.log("Surface area of the circle:", surfArea);


function calsurf(radius) {
    const pi = 3.14159;

    const surfArea = pi * radius * radius;
     return surfArea;
}

function numberSecMid (hour, minutes, seconds) {
    const secInHour = 60 * 60;
    const secInMin = 60;
    
    const totalSec = (hour * secInHour) + (minutes * secInMin) + seconds;
    return totalSec;
}

const hour = 8;
const minutes = 24;
const seconds = 35;

const secSinceMid = numberSecMid(hour, minutes, seconds);
console.log("Seconds since midnight:", secSinceMid);






