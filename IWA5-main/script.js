/*shipping*/

const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const area = 'RSA';
let shipping = 0;

if (area == 'RSA'){
    shipping = 400;
    currency ='R';
} else if (area == 'NAM'){
    shipping = 600;
    } else if (area == 'NK'){
        console.log(BANNED_WARNIN) 
        } else {
        shipping = 800;
        }

/*cost */

let cost = 0 ;
const NONE_SELECTED=0;
const customers=2;
const FREE_WARNING = 'Free shipping only applies to single customer orders';

const shoes = 300*1;
const toys = 100*5 ;
const shirts = 150* NONE_SELECTED;
const batteries=35*2;
const pens = 5*NONE_SELECTED;

cost= shoes+toys+ shirts+ batteries+ pens;

//total cost
if ((cost>=1000) && (area =='RSA'||'NAM')){
    shipping=0
    if ((customers!==1) && (shipping ==0)) {
        console.log(FREE_WARNING)
    }else {
        console.log(currency,cost+shipping)
    }
}else {
    console.log(currency,cost+shipping)
}
