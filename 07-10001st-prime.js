// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var prime = 2;

 for (var i = 1; i<=10001; i++) {

  console.log(i + " " + prime);
  nextPrime()
 }

function nextPrime(){
  for(var i = prime+1; i < 999999999999; i++) { // fix!!
    if (isPrime(i)) {
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