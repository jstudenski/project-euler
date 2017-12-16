// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?


var prime;

primeFactor(600851475143);

function primeFactor(x) {
  prime = 2;

  if (isPrime(x)) {
    console.log("largest prime factor: " + x);
  } else {

    while (1===1) { // fix

      if (x%prime === 0) {
        primeFactor(x/prime)
        break;  
      }

      nextPrime();
    }

  }
};


function nextPrime(){
  for(var i = prime+1; i < 999999999999; i++) { // fix!!
    if (isPrime(i)) {
      // console.log("is prime " + i);
      prime = i;
      return;
    }
  }
}


function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 

