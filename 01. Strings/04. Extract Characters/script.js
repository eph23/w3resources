"use strict";

/* ================= SOLUTION 1================= */
function truncate_string(str, length) {
    let splitted = "";
    for (let i = 0; i < 4; i++) {
        splitted += str[i];
    }
    return splitted;
}

console.log(truncate_string("Robin Singh", 4)); // "Robi"

/* ================= SOLUTION 2================= */
function truncate_string_2(str, length) {
    return str.slice(0, length);
}

console.log(truncate_string_2("Robin Singh", 4)); // "Robi"
