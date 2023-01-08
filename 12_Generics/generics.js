var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
identityThree(true);
identityThree(3);
function identityFour(val) {
    return val;
}
function setSearchProduct(products) {
    var myIndex = 3;
    return products[myIndex];
}
// using arrow function
var getMoreSearchProducts = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFunction(3, { connection: "", username: "", password: "" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
