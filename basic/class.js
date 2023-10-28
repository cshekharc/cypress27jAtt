// class Person{
//     constructor(){
//         this.name = "India";
//     }

//     sum(a,b){
//         return a+b
//     }
// }

// const person1 = new Person()
// console.log(person1.name)
// console.log(person1.sum(2,3))
// person1.greet()

class BankAcc{
    #balance = 0 // private entity
    constructor(){
        this.name = name
    }
    deposit(amount){
        this.#balance =this.#balance + amount
    }
    getBalance(){
        return this.#balance
    }
}

const account = new BankAcc()
account.deposit(500)
console.log(account.getBalance())
