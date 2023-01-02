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

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditCardDetails?: number
}

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

let myUser: User = {
  _id: "12345",
  name: "h",
  email: "h@h.com",
  isActive: false,
} 

myUser.email = "k@k.com";
// myUser._id = "123"; // error as the value is read only
