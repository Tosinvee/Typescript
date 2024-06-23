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