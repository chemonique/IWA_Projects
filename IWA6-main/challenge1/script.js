const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = !isNaN(primaryPhone) && typeof primaryPhone === 'string';
const secondaryValid = !isNaN(secondaryPhone) && typeof secondaryPhone === 'string';

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);

// isNaN checks to see if the primaryphone is not a number, that is true, primaryphone is not a number  but if you add the ! it makes the answer of NaN the opposite value because two false = true, two true = true one true and one false = false
//the typeof checks if the primaryphone is a string which it is, both parts of the if needs to be true to for primaryvalid to be true, 
//that makes the primaryvalid false because !isNaN is false and the string is true 
//the opposite counts for the secondaryPhone, it is a number with makes the NaN false, the ! makes the statement true, and the secondaryphone is a string with means both are true;