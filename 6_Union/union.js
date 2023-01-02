var score = 33;
score = "55"; // string
score = true; // boolean
var kuldeep = { name: "Kuldeep", id: 334 };
kuldeep = { username: "ks", id: 344 };
function getDbId(id) {
    // making api calls
    console.log("Db id is ".concat(id));
}
getDbId(123);
getDbId("123");
function getDbIdOne(id) {
    // making api calls
    // id.toLowerCase(); // error
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("Db id is ".concat(id));
}
// Array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"];
var data4 = [1, "2", true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";
