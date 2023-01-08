const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type> (val: Type): Type{
    return val;
}

identityThree("3");
identityThree(true);
identityThree(3);

function identityFour<T>(val: T):T{
    return val;
} 

interface Bottle{
    brand: string,
    type: number
}

function setSearchProduct<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

// using arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection:"", username: "", password:""});

interface Quiz {
    name: string,
    type: string
}

interface Course{
    name: string,
    authir: string,
    sybject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}