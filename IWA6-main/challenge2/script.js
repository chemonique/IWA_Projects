const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
// if hour and minute of day =0 the the day start 
if (hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseInt(tax) / 100;//tax=string->tax=number(integer)number to do maths
    const startingAfterTax = salary * (1 - taxAsDecimal);//20% of salary
    const balance = startingAfterTax - transport - food - rent; 
    console.log('R ' + balance.toFixed(2));
  }