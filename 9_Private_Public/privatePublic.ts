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

class User {
    private readonly city: string = "Jaipur";
    constructor(
        public email: string, 
        public name: string
        ) {
        this.email = email;
        this.name = name;
    }

}

const kuldeep = new User("k@k.com", "kuldeep");