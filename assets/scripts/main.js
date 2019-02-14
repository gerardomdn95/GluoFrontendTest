import DATA from '../data/data.js';
'use strict'

const main = () => {
    document.getElementById("name").innerHTML = DATA.name;
    document.getElementById("phone").innerHTML = DATA.phone;
    document.getElementById("subscription").innerHTML = DATA.subscription;
    document.getElementById("conditions").innerHTML = DATA.conditions;
    document.getElementById("paymentAmount").innerHTML = DATA.paymentAmount;
    document.getElementById("paymentDeadline").innerHTML = DATA.paymentDeadline;
    document.getElementById("gigabytes").innerHTML = DATA.gigabytes;
    document.getElementById("validUntil").innerHTML = DATA.validUntil;
    document.getElementById("used").innerHTML = DATA.used;
    document.getElementById("avilable").innerHTML = DATA.avilable;
}

main();