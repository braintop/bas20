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

let names = ["oren", "david", "or", "yahel"]
console.log(names)
let i = names.indexOf("david")//1 
let j = names.indexOf("zipo")//-1
if (i != -1) {
    console.log("david exist in names on index :" + i)
}
else if (i == -1) {
    console.log("zipo not exist in names on index:" + j)
}

if (j != -1) {
    console.log("zipo exist in names on index:" + j)
}
else if (j == -1) {
    console.log("zipo not exist in names on index:" + j)
}


let x1 = names.findIndex((item)=> item=="david")
let x2 = names.indexOf("david");