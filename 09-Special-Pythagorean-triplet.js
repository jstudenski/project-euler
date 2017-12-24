// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var a = 1;
var b = 2;
var c = 3;




while (b < c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log("----------");

  // text += "The number is " + i;
  // i++;
}



// for (i = 1; i < 999; i++) {


//   b++;
//   c = (1000-a-b);

//   console.log(a);
//   console.log(b);
//   console.log(c);

// }


// isTriplet(3, 4, 5);

function isTriplet(a, b, c) {
  if (a*a+b*b===c*c){
    console.log("true!");
  }

}