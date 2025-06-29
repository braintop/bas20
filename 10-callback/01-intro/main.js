function sum1(x, y) {
    return x + y
}
let sum2 = (x, y) => {
    return x + y
}

let s = sum1// s is referance to function 
// referance = מצביע לפונקציה 
console.log(s)

let sol1 = sum1(5, 6)
console.log(sol1)//11

let sol2 = sum2(5, 6)
console.log(sol2)//11 

let sol3 = s(5, 6)
console.log(sol3)