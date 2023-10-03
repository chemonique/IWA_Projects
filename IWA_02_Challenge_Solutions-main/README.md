# IWA_02_Challenge_Solutions

Challenge 1  (the wrong code)
/* This is the firstname of the user /*
const user = 'John'

/* This is the lastname of the user /* const surname = 'Smith'
console.log(user; surname;)

Challenge 1 (description) 

/* This is the firstname of the user /*
The comments was wrong, I changed it from /*.../*  to  /*...*/
With the asterisk on the outside it makes all the code follwing apart of the comment 
with the forward slash on the end all the in code before the forward slash would be a comment
/* This is the lastname of the user /* const surname = 'Smith'
The const was correct but I move the surname const to the next line to make it easier so read 
console.log(user; surname;)
Console.log was wrong 
the semi colons needed to be removed and one comma need to be between the user and surname

Challenge 1 (fixed code)
/* This is the firstname of the user */

const user = 'John'

/* This is the lastname of the user */ 
const surname = 'Smith'

console.log(user, surname)




Challenge 2 (the wrong code)
/** (c) ACME Inc. 2010 */

/*
 * This is the date that a user created their account 
 */
const date = '10/07/2014'
console(date)


Challenge 2 (description)
/** (c) ACME Inc. 2010 */
Can be left like this or the second asterisk can be removed
/*
 * This is the date that a user created their account 
 */
The second comment needed a second asterisk to make that the comment would show when you hover over the date variable
console(date)
Console needed the log method to work/ show


Challenge 2 (the fixed code)
/** (c) ACME Inc. 2010 */

/** This is the date that a user created their account */
const date = '10/07/2014'

console.log(date)


challenge 3 (wrong code)
// 
It is important to show the following message in order to:
- to assure users
- to scare hackers
- to impress investors
//
console.warn(Security scan starting)

/* It is important to let user know when they can close the page  /*
cnosole.info('Please wait for scan to complete before closing the browser.)


challenge 3 (description)
// 
It is important to show the following message in order to:
- to assure users
- to scare hackers
- to impress investors
//
Needs so be in comments(/**/)or every line needs // in front of it or /**/ at the beginning and end of the lines
console.warn(Security scan starting)
needs ‘...’in brackets
/* It is important to let user know when they can close the page  /*
This comment is done wrong, needs so be /*...*/
cnosole.info('Please wait for scan to complete before closing the browser.)
cnosole = console
in the brackets, need a ’ at the end 


challenge 3 (fixed code)
/*
It is important to show the following message in order to:
- to assure users
- to scare hackers
- to impress investors

*/
console.warn('Security scan starting')

/* It is important to let user know when they can close the page  */

console.info('Please wait for scan to complete before closing the browser.')

