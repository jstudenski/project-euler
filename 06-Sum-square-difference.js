var total=0;
var sum=0;
  
for (i = 1; i <= 100; i++) {
  total += (i*i);
  sum += i;
} 

sum *= sum;
console.log(sum-total);

