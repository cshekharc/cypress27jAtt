class Car {
    // this.brandName = brandName;
    constructor(brandName){
        this.brandName = brandName;
    }

    show(){
        // return "i have " + this.brandName + "car" 
        return `I have 
        ${this.brandName} 
        car` // '' or """"
    }
}

class Model extends Car{
   
    constructor(brandName, carModel){
        super(brandName)
        this.carModel = carModel
    }
    present(){
        return `${this.show()} and is ${this.carModel} model`
    }
}

let car1 = new Model("Tata", "Tiago")
console.log(car1.present())