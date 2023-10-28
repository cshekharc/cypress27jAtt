 async function butterSpread(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Butter is spreading on bread")
            resolve()
        }, 1500)
    })
}

 async function jellyOnBread(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Jelly on bread")
            resolve()
        }, 1000)
    })
}
async function theOtherSlice(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("put the slice")
            resolve()
        }, 500)
    })
}

async function mySandwithch(){
    await butterSpread()
    await jellyOnBread()
    await theOtherSlice()
    console.log("My sandwithch is ready")
}

mySandwithch()
