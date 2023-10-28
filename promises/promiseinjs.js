// const abc = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         console.log('We are in timeout')
//         resolve()
//     }, 1500)
// }).then(()=>{
//     console.log('We are out of time')
// })

// resolve // reject 

function fname(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let err = false;
            if(err){
                resolve({userName: "Shekhar", password: 123123})
            }else{
                reject('Error: something went wrong')
            }
        }, 1000)
    })
}

fname().then((rt)=>{
    console.log(rt)
}) 
.catch((er) => {
    console.log(er)
}).finally(()=>{
        console.log('Oh, thanks for the message')
})
