class User {
    public email: string;
    protected _courseCount: number = 1;
    name: string;
    // #name: string; // javascript way of defining private
    private readonly city: string = "Jaipur";

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    public get userEmail(): string {
        return `user email is ${this.email}`;
    }

    public get courseCount(): number {
        return this._courseCount;
    }

    public set courseCount(num: number){
        if(this._courseCount <= 1){
            throw new ErrorEvent("Course count should be more then 1");
        }
        this._courseCount = num;
    }

}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }
}

const user = new User("k@k.com", "kuldeep");

console.log(user.courseCount);
user.courseCount = 2;
console.log(user.courseCount);

const subUser = new SubUser("k1@k.com", "kuldeep1");
console.log(subUser.name);

export {};

// use tsc -t es5 10_Getters_Setters/gettersSetters.ts