"use strict";

/* ================= SOLUTION 1================= */
/* function is_string(str) {
     return typeof str === "string";
} */

/* ================= SOLUTION 2================= */
function is_string(str) {
    if (Object.prototype.toString.call(str) === "[object String]") {
        return true;
    } else {
        return false;
    }
}

console.log(is_string("w3resource")); // true
console.log(is_string([1, 2, 4, 0])); // false
