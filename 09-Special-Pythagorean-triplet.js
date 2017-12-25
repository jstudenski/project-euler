// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var a = 1;
var b = 2;
var c = 3;


for (var i = 1; i < 333; i++){
  while (b < c) {
    a;
    b++;
    c=(1000-b-a);
    isTriplet(a, b, c);
  }
  a++
  b=a+1
}


function isTriplet(a, b, c) {
  if (a*a+b*b===c*c){
    console.log("Solution: " + a*b*c);
  }
}