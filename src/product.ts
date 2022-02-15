import Lenovo from "./lenovo";
import MacBook from "./macbook";

let lenovo = new Lenovo("Thinkpad", true, true)
let mb = new MacBook(2018, true, true)

console.log(lenovo)
console.log(lenovo.type)
console.log(mb)
console.log(mb.name)
lenovo.b()
mb.a()
