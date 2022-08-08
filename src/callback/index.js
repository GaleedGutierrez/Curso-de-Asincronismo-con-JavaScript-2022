"use strict";
function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}
function calc(num1, num2, callback) {
    const result = callback(num1, num2);
    return result;
}
console.log(calc(2, 2, sum));
setTimeout(function () {
    console.log('Hi, TypeScript.');
}, 5000);
function greeting(name) {
    console.log(`Hi, ${name}`);
}
setTimeout(greeting, 2000, 'Galeed');
