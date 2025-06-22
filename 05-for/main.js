//   init    consition.  change
for (let i = 0; i < 5; i++) {
    console.log(i)
}
console.log("====10 till 1 =====")
for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log("====even version 1 =====")

for (let i = 0; i <= 100; i = i + 2) {
    console.log(i)
}
console.log("====even version 2 =====")
//i % 2 == 0  even 
//i % 2 == 1  odd 
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

let number = Math.floor(Math.random() * 100)
console.log(number)

for (let i = 0; i <= 10; i++) {
    let number = Math.floor(Math.random() * 100)// מגריל מספר
    if (number > 50) { // בודק אם גדול מ ;50
        console.log(number) // מדפיס 
    }
}

let counter = 0
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100)
    if (number > 10 && number < 20) {
        counter++
    }
}
console.log("conuter is " + counter)

//30 - 70    
let x = 30 +  Math.floor(Math.random() * (40) )// מגריל מספר

min = 10
max = 200
let y = min +  Math.floor(Math.random() * (max-min) )// מגריל מספר


//30 - 100    
let z = 30 +  Math.floor(Math.random() * (100-30) )// מגריל מספר

//10 - 30    
let t = 10 +  Math.floor(Math.random() * (30-10) )// מגריל מספר



//max number 
let max = 0 
for(let i=0;i<10;i++){
    let number = Math.floor(Math.random() * 100)
    if(number > max){
        max = number
    }
}//end of for 
console.log("max is : " + max)