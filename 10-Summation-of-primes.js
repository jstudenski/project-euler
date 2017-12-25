// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.



var sum = 2;
var prime = 3;

while (prime < 2000000) {
  if (isPrime(prime)) {
    console.log(prime);
    sum += prime
  }

  prime = prime+2;
}

console.log(sum);

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

