let arr = [1, 10, 3, 21, 4, 10, 19]
// let newArr = []
// for(let i=0;i<arr.length;i++){
//     newArr.push(arr[i])
// }
//1.filter 
let newArr = arr.filter((item) => item > 10);
console.log(newArr);
//2.map 
let powers = arr.map((item) => item * item)
console.log(powers);
//3.forEach 
arr.forEach((item) => {
    console.log("❤️" + item + "❤️")
})
//4.some 
let some = arr.some((item) => item % 2 == 0)//true 
console.log("some:" + some)
//5.every 
let every = arr.every((item) => item % 2 == 0)//false  
console.log("every:" + every)
//6.find 
let find = arr.find((item) => item % 2 == 0)//false  
console.log("first even:" + find)
//7.find 
let findIndex = arr.findIndex((item) => item % 2 == 0)//false  
console.log("first even index:" + findIndex)
