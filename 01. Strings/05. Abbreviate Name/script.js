"use strict";

/* ================= SOLUTION 1================= */
function abbrev_name(str) {
    let newArr = [];
    let splitted = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            splitted += str[i];
        } else {
            newArr.push(splitted);
            splitted = "";
        }
    }
    if (splitted !== "") {
        newArr.push(splitted);
    }

    console.log(newArr);

    if (newArr.length > 1) {
        return `${newArr[0]} ${newArr[1][0].toUpperCase()}`;
    } else {
        return newArr[0];
    }
}

console.log(abbrev_name("Robin Singh")); // "Robi"
console.log(abbrev_name("Ephraim")); // "Robi"
console.log(abbrev_name("John Smith")); // "Robi"

/* ================= SOLUTION 2================= */
function abbrev_name_2(str) {
    let newStr = str.split(" ");
    if (newStr.length > 1) {
        return `${newStr[0]} ${newStr[1][0].toUpperCase()}`;
    } else {
        return newStr[0];
    }
}

console.log(abbrev_name_2("Robin Singh")); // "Robi"
console.log(abbrev_name_2("Ephraim")); // "Robi"
console.log(abbrev_name_2("John Smith")); // "Robi"
