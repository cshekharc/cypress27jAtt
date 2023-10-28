import Parent from "./parent.js"
import Child from "./child.js"

const parent = new Parent("Shekhar")
parent.sayHello()

const child = new Child("Shekhar", "35")
child.sayHello()
child.myAge()