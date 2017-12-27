// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

var sum = 2;
var prime = 3;

//var start = new Date().getTime();
while (prime < 2000000) {
  if (isPrime(prime)) {sum += prime}
  prime +=2;
}
// var end = new Date().getTime();
//console.log(end - start);
console.log("SUM: "+sum);

function isPrime(num) {
  for(var i = 2; i < Math.sqrt(num)+1; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

