//IWA 3 Challenge 1


import {year} from "./configuration.js";
import {company} from "./configuration.js";

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;