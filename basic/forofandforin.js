// for-of --- when we have to use an array
let array = [
    {name: 'abc', age: 20, gender: "male"},
    {name: 'cde', age: 24, gender: "female"},
    {name: 'efg', age: 34, gender: "female"},
    {name: 'pqr', age: 38, gender: "male"},
] 

for(let arr of array){
    console.log(arr)
}

// let numbers = [1, 2, 3, 4, 5, 6]
// let add = 0
// for (const iterator of numbers) {
//     add = add + iterator   
// }
// console.log(`addition is : ${add}`)


// const colors = ['blue', 'green', 'yellow', 'red']
// for(const color of colors){
//     console.log(color)
// }

// const str = 'chandrshekhar'
// for(const name of str){
//     console.log(name)
// }

// let marks = [30, 40, 50, 20]
// for (let mark of marks) {
//     console.log(mark)
// }


// and for-in --- when we have to use an object

// let student = {
//     name: "stundet1",
//     class: "Std 1",
//     div : "A",
//     age: 6
// }

// for(let std in student){
//     let value = student[std]
//     // console.log(`${std} : ${value}`)
//     // console.log('${std} : ${value}') // this will not solve
//     console.log(`${std} : ${value}`)
//     console.log(`${value} these are vaules in the object`)
// }

// const color = ['red', 'green', 'blue'] // array - typeof -- object
// for(const clr in color) {
//     console.log(clr)
// }