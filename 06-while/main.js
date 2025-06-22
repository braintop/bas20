// for(let i=0;i<20;i++){
//     console.log(i)
// }
//while = כל עוד 
let i = 0
while (i < 20) {
    console.log(i)
    i++
}
//a = 97 , b= 98 .........z = 123 
let randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 6));
console.log(randomChar);
//===========================
i = 0
while (i < 20) {
    if (i % 2 == 0) {
        console.log(i)
        i++
    }
}
//===========================

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
        i++
    }
}


//
let min = Math.floor(Math.random() * 100)
let x = 0
let number = 0
while (x < 10) {
    number = Math.floor(Math.random() * 100)
    if (number < min) {
        min = number
    }
    x++;
}
console.log(number)
let num = 0
num = 3

