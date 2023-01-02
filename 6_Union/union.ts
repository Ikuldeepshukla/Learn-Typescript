let score: number | string | boolean = 33;

score = "55"; // string
score = true; // boolean

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let kuldeep: User | Admin = {name: "Kuldeep", id: 334}

kuldeep = {username: "ks", id: 344};

function getDbId(id: number | string){
    // making api calls
    console.log(`Db id is ${id}`);
}

getDbId(123);
getDbId("123");

function getDbIdOne(id: number | string){
    // making api calls
    // id.toLowerCase(); // error
    if(typeof id === "string"){
        id.toLowerCase()
    }
    console.log(`Db id is ${id}`);
}

// Array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: string[] | number[] = ["1", "2", "3"];
const data4: (string | number | boolean)[] = [1, "2", true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";