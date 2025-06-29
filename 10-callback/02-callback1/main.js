//callback :  
//העברת פונקציה כפרמטר 

function printName() {
    console.log("oren")
}
function fireMan() {
    console.log("fire fire....")
}
function policeMan() {
    console.log("police hands up");
}

function myFunc(callback) {
    callback()
    //לפתוח ולסגור סוגרים זה להפעיל פונקציה
}
myFunc(printName)
myFunc(fireMan)
myFunc(policeMan)