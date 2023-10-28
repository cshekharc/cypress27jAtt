// const abc = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log('timeOut')
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log('OutTime')
// })






// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: "Sachin", email : "sachin@god.com"})
//     }, 1000)
// })

// promise1.then(function(user){
//     console.log(user)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let err = false;
//         if(!err){
//             (resolve({useName : "myself", passowrd : "11122" }))
//         }else{
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// })

// let user1 = promise2.then(function(user){
//     console.log(user)
//     return user.useName
// }).then(function(useName){
//     console.log(useName)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("promise is completed")
// })
// console.log(user1)

// console.log(user1)

// async function promise3(){
//     try {
//         const response = await promise2
//         console.log(response);
//     }catch (error) {
//         console.log(error);   
//     }
// }
// promise3()

// function fname() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             let err = true;
//             if (err) {
//                 resolve({ useName: "myself", passowrd: "11122" })
//             } else {
//                 reject("Error: Something went wrong")
//             }
//         }, 1000)
//     })
// }
// fname().then(function(rt){
//     console.log(rt)
// }).catch(function (er){
//     console.log(er);
// })

// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Division by zero is not allowed!");
//     }
//     return a / b;
// }

// try {
//     const result = divide(10, 0);
//     console.log(result);
// } catch (error) {
//     console.error(error.message);
// }

try{
    let fname = 1234
    console.log(fname.toUpperCase())
}catch(err){
    console.log("Fname must be a string")
    console.log(err.name);
}finally{
    console.log("done with try catch");
}