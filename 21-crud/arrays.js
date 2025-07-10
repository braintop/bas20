// תזכורת למערכים 
console.log("hello world");
let arr = ["uri", "oren", "uzi", "eli", "maor", "yola"]
arr.push("zahava")

console.log(arr)
console.log(arr[0])

arr[0] = "david" // index 0 update to david 
let nameIndex = arr.indexOf("uzi");
console.log(nameIndex)
nameIndex = arr.indexOf("Alon");// -1 
console.log(nameIndex)
if ("alom" in arr) {
    console.log("exist");
}
else {
    console.log("not exist");
}
//=======================================================
if (arr.indexOf("alom") >= 0) {
    console.log("exist");
}
else {
    console.log("not exist");
}
//=======================delete=================
arr.splice(3, 1)// החל מאנדקס 3 למחוק איבר 1 
console.log(arr)
// delete = שני שלבים 
// שלב 1 - מציאת מיקום 
// שימוש ב splice 
let index = arr.indexOf("yola")// get index of 
if (index >= 0) {
    arr.splice(index, 1)// delete 
}

console.log(arr.length)

