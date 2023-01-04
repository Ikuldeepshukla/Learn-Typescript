// class User {
//     public email: string;
//     name: string;
//     // #name: string; // javascript way of defining private
//     private readonly city: string = "Jaipur";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var kuldeep = new User("k@k.com", "kuldeep");
