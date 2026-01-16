"use strict";

/* ================= SOLUTION 1================= */
function string_to_array(str) {
    let arr = [];
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        } else {
            arr.push(newStr);
            newStr = "";
        }
    }
    if (newStr !== "") {
        arr.push(newStr);
    }

    return arr;
}

console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]
