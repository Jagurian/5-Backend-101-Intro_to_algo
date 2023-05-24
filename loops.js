

    
    
    function printNumbers(n) {
    console.log("Numbers from 1 to", n + ":");
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  
    console.log("Numbers from", n, "to 1 (in descending order):");
    for (let i = n; i >= 1; i--) {
      console.log(i);
    }
  
    console.log("Numbers from -", n, "to", n + ":");
    for (let i = -n; i <= n; i++) {
      console.log(i);
    }
  
    console.log("Odd numbers from 1 to", n + ":");
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  

  const n = 5;
  printNumbers(n);
  




  function printNumbersUpTo(randomInt) {
    console.log("Numbers from 0 to", randomInt + ":");
    for (let i = 0; i <= randomInt; i++) {
      console.log(i);
    }
  }
  
  
  const randomInt = Math.floor(Math.random() * 100); 
  printNumbersUpTo(randomInt);
  






