// // objects arrays and functions
// // all types of are objects

// const person = {
//     name: 'shekhar',
//     age: 32
// }
// console.log(person)
// console.log(person.name)
// console.log(person["age"])

// person.name= 'chandrashekhar'
// person.address = "viman nangar, pune"
// person.mobileNo = "12345"
// console.log(person)

// delete person.mobileNo
// delete person.address

// console.log(person)

// person.address = "viman nangar, pune maharashtra"

// console.log(person)

// const car = {
//     make : "Tata",
//     model : "Tiago",
//     start : function(){
//         console.log("This is good car")
//     },
//     stop : function(){
//         console.log("This is very good car")
//     }

// }
// console.log(car)
// car.start()
// car.stop()

// const person = {
//     name: 'shekhar',
//     age: 32,
//     hobbies: ['reading' , 'writing', 'travelling']
// }

// console.log(person.hobbies)

// console.log(person.hobbies[2])
// person.hobbies[1] = 'singing'

// person.hobbies.pop()
// console.log(person.hobbies)
// person.hobbies.push('drawing')
// console.log(person.hobbies)
// delete person.hobbies[0]
// console.log(person.hobbies)

// Function

// function hello(){
//     console.log('hi all')
// }
// hello()
// function hellopara(name){
//     console.log('hey everyone ' +name)
// }
// hellopara('india')

// const sayHello = function(xyz){
//     console.log('Hello ' +xyz)
// }
// sayHello('Newcompany')


// function add(a,b){
//     return a + b
// }

// console.log(add(3,4))  //7

// function greet(fname, callback){
//     console.log('Hey ' +fname)
//     callback()
// }


// function callMe(){
//     console.log("This is a callback")
// }

// greet('Velocity', callMe)

// arrays function object -- typeof is object

// array

const arr = [1, 2, 3, 4] // numbers as elements
console.log(arr)
console.log(typeof arr)

let arr1 = ["abc", "xyc", "pqr"] // array of string
console.log(arr1)
console.log(typeof arr1)

let countryAndCode = [91, "India", 1, "USA", 3, "UK", 4, "China", true, false]
console.log(countryAndCode)

let fruits = ["orange", "apple", "abc"]
console.log(fruits[1])

let abc = [1, "two", {city: "Pune"}, function(a,b){return a +b}]
console.log(abc[3](2,3))
console.log(typeof abc)
//abc.push