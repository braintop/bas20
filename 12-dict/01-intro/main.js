//מבני נתונים מילון 
//json 
let p1 = { price: 100, title: "ball" }//title and price are keys 
let p2 = { price: 120, title: "basketball" }// 120 and basketball are values
console.log(p1);
console.log(p2);

console.log(p1.price)
console.log(p1["price"])

let keys = Object.keys(p1)
console.log(keys);

let car = { speed: 100, price: 20000, name: "bmw" }
keys = Object.keys(car) // ["speed", "price", "name"]
console.log(keys)

//הגדר אוביקט בשם מחשב עם התכונות הבאות 
// title, price, memory, color, size 
//הדפס את האובייקט 
let c1 = { title: "mac", price: 1000, memory: "5j", color: "blue", size: 10 }
console.log(c1);
let c2 = { title: "windows", price: 10000, memory: "6j", color: "white", size: 10 }
if (c1.price > c2.price) {
    console.log(c1)
}
else {
    console.log(c2)
}

