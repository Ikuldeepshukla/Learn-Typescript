function addTwo(num : number){
    return num + 2;
}

console.log(addTwo(10));

function getUpper(s: string): string{
    return s.toUpperCase();
}

console.log(getUpper("hello world"));

function signUpUser(name: string, email: string, phone: number, isPaid: boolean){
    return `${name} ${email} ${phone} ${isPaid}`;
}

console.log(signUpUser("myname", "myname@email.com", 1234567890, true));

function loginUser(name: string, email: string, isPaid: boolean = false): boolean{
    console.log(`${name} ${email} ${isPaid}`);
    return true;
}

console.log(loginUser("myname", "myname@email.com"));

const gethello = (s: string): string => {
    return `${s} ! Hello`;
}

console.log(gethello('Hello'));

const heroes = ["thor", "ironman", "captain america"];

heroes.map((hero): string => {
    return hero;
})

function printError(err: string): void {
    console.log(err);
}

printError("some error");

function handleError(err: string): never {
    throw new Error(err);
}

handleError("failed");

export {};