//challenge 1
const value = "3"
console.log(parseInt(value) + 4 + parseInt(value))

//challenge 2
const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
  console.log(`Good morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good morning, ${firstname}!`);
} else {
  console.log("Good morning!");
}

//challenge 3 
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance))*-1
const leo = `${leoName} ${leoSurname} (Owed: R ${parseFloat(leoBalance*-1).toFixed(2)})\n`
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${parseFloat(sarahBalance*-1).toFixed(2)})\n\n`
const total = ` \nTotal amount owed: R ${owed.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}\n`
const result = `\n${leo}${sarah}\n${divider}\n${total}\n${divider}\n`

console.log(result)