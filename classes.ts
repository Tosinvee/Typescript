/////ACCESS MODIFIERS IN TYPESCRIPT///////
class Person {
    constructor(public name:string,  public age:number){
        this.name = name
        this.age = age
    }

}
class Person2 extends Person{
    getAge():number{
        return this.age 
    }
}

const result = new Person2("shade", 19)
result.getAge()
console.log(result)

//using protected
class Proctected{
    protected name: string
    constructor(name: string){
        this.name = name
    }
    public greet(){
        console.log(`hello ${this.name}`)
    }
}

class Proctected2 extends Proctected{
    constructor(name:string){
        super(name)
    }
    public greet(){
        return `hello ${this.name}`
    }
    
}

const result2 = new Proctected2("shade")
const result3 = new Proctected("tosin")
console.log(result2.greet())
console.log(result3.greet())