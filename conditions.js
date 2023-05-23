






function calPrice(canRedTariff) {
    const fullTariff = 10;
    const redTariff = 8;
  
    if (canRedTariff) {
      console.log("Price to pay: " + redTariff + " €");
    } else {
      console.log("Price to pay: " + fullTariff + " €");
    }
  }
  
  
  calPrice(true); 
  calPrice(false); 
  



function findMax( numb1, numb2, numb3) {
    let numb1 = maximum;

    if (numb2 > maximum) {
        maximum =  numb2;
    }

    if (numb3 > maximum) {
        maximum = numb3;
    }

    return maximum;
}

const result = findMax(5, 9, 3);
console.log(result); 









Math.floor(math.random() * 6) + 1;





function findNumbSameValue () {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;


if (dice1 === dice2 && dice2 === dice3) {
    return "Three the same";
  } else if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
    return "Two same";
  } else {
    return "None";
  }
}

const resultt = findNumbSameValue();

console.log(resultt);




function getDayName (dayNumb) {
    const days = ["Monday", "Tuesday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday"];
}

if (dayNumb < 1 || dayNumb > 7) {
    return "Invalid";

const index = dayNumb - 1;

return days[index];

const dayNumb = 6;
const dayName = getDayName(dayNumb);

console.log(dayName);

}





function calculatePrice(numCopies) {
    let totalPrice = 0;
  
    if (numCopies <= 10) {
      totalPrice = numCopies * 0.12;
    } else if (numCopies <= 30) {
      totalPrice = 10 * 0.12 + (numCopies - 10) * 0.11;
    } else {
      totalPrice = 10 * 0.12 + 20 * 0.11 + (numCopies - 30) * 0.10;
    }
  
    return totalPrice.toFixed(2); 
  }
  
  
  const numCopies = 25;
  const price = calculatePrice(numCopies);
  console.log(`The price for ${numCopies} copies is €${price}.`);













