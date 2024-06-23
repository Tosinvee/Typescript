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

//using const makes the array and its elemenet immutable
// const nums = [1, 2] as const
// nums[0] = 1 // so this will throw an error

 //////DIFF BTW TYPE AND INTERFACE///////////////////////////
 ///TYPE 
 type PersonType = {name:string, age:number}
 const person:PersonType = {name:"shade", age:5}
 console.log(person)


 ///INTERFACE
 interface Animal{
    name:string
    makeSound():void
 }
//Extending Interface
 interface Dog extends Animal {
    breed: string
    wagTail():void
 }

 class Dog implements Dog{
    name:string
    breed: string
    constructor(name:string, breed:string){
        this.name = name
        this.breed = breed
    }
    makeSound(): void {
        console.log( `${this.name} is barking woo WOOO`)
    }
    wagTail(): void {
        console.log(`${this.breed} is wagging his tail`)
    }
 }

 const dog = new Dog('bubby', 'localDog')
 dog.makeSound()
 dog.wagTail()

 interface Product{
    name:string
    price: number
    calDiscount(discount:number): number
 }

 const customer1:Product ={
    name:"A comple kaftan",
    price:200000,
    calDiscount(discount:number){
        return this.price * (1 - discount)
    }
 }
 console.log(customer1.calDiscount(0.1))
 