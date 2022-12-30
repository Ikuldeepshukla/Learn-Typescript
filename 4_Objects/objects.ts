const User = {
  name: "Kuldeep",
  email: "kuldeep@email.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = {name: "Kuldeep", isPaid: false, email: "k@k.com"}; 
createUser(newUser); // no error - odd behaviour of object in ts

// createUser({name: "Kuldeep", isPaid: false, email: "k@k.com"}); // error

function createCourse():{name: string, price: number}{
  return {name: "reactjs", price: 399}
}