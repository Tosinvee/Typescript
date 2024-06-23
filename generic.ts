function identity<T>(arg:T):T {
    return arg
}
let str = identity<string>("oluwatosin")
    console.log(str)

function getProperty<T extends { name: string }>(obj: T, prop: keyof T): T[keyof T] {
    return obj[prop];
}

let personn = { name: "shade" };
console.log(getProperty(personn, "name")); // Output: shade
