// function getName(name: string): string{
//     return name
// }
// console.log(getName("shade"))

// interface is a keyword in typescript that defines the structure of an object
// interface User{
//     name: string;
//     age: number;
//     greet(messsage:string): string
    
// }
// class Customer implements User{
//     name:string;
//     age: number;
//     constructor(name:string, age:number){
//         this.name =name
//         this.age =age
//     }

//     greet(message:string):string{
//         return `Hello ${message}`
//     }
// }
// const client = new Customer('shade', 5)
// console.log(client.greet('shade'))

// function person(p:object){
//     if('name' in p){
//         return p.name
//     }
//     return 'no name'
// }
// console.log(person({name:'tosin'}))

//using as const makes the array and its elemenet immutable
const nums = [1, 2] as const
nums[0] = 3