//callback :  
//העברת פונקציה כפרמטר 

function sum(a, b) {
    let s = a + b
    return s
}

function myFunc(callback) {
    let solution = callback(5, 4)
    console.log(solution)// 9 
    //לפתוח ולסגור סוגרים זה להפעיל פונקציה
}

myFunc(sum)
