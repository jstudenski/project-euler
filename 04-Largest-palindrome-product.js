// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


var largest = 0;

for (var a = 100; a < 1000; a++) {
  for (var b = 100; b < 1000; b++) {
    if (isPalindrome(a*b)) {
      if ((a*b) > largest) {
        largest = a*b;
      }
    }
  }
}

console.log(largest);

function isPalindrome(num) {

  var y = num.toString();
  var z = y.split("").reverse().join("");

  if (y === z) {
    return true;
  } else {
    return false;
  }

}

