"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(10));
function getUpper(s) {
    return s.toUpperCase();
}
console.log(getUpper("hello world"));
function signUpUser(name, email, phone, isPaid) {
    return "".concat(name, " ").concat(email, " ").concat(phone, " ").concat(isPaid);
}
console.log(signUpUser("myname", "myname@email.com", 1234567890, true));
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("".concat(name, " ").concat(email, " ").concat(isPaid));
    return true;
}
console.log(loginUser("myname", "myname@email.com"));
var gethello = function (s) {
    return "".concat(s, " ! Hello");
};
console.log(gethello('Hello'));
var heroes = ["thor", "ironman", "captain america"];
heroes.map(function (hero) {
    return hero;
});
function printError(err) {
    console.log(err);
}
printError("some error");
function handleError(err) {
    throw new Error(err);
}
handleError("failed");
