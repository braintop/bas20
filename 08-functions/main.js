function printName(name) {
    console.log("======" + name + "=====")
}

printName("Oren")
printName("David")

function sumDigites(number) {
    let sum = 0;
    while (number != 0) {
        sum += number % 10
        number = Math.floor(number / 10)
    }
    return sum 
}

//  number | number %10 | sum | 
//    137       7.         7 
//    13       3           10 
//    1        1           11
//    0         
let x = +prompt("enter a number")
let s1 = sumDigites(x)//2
console.log(s1)// 
let y = +prompt("enter a number")
let s2 = sumDigites(y)//2
console.log(s2)//  

