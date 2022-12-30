var User = {
    name: "Kuldeep",
    email: "kuldeep@email.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Kuldeep", isPaid: false, email: "k@k.com" };
createUser(newUser); // no error - odd behaviour of object in ts
// createUser({name: "Kuldeep", isPaid: false, email: "k@k.com"}); // error
function createCourse() {
    return { name: "reactjs", price: 399 };
}
