// תרגיל  
// 1. הדפס באמצעות לולאה את כל ה persons 
// 2. הדפס באמצעות לולאה את כל השמות הפרטיים של persons 
// 3. הדפס את האדם עם הגיל הכי גבוה באמצעות לולאה let persons = [
let persons = [
    {
        firstname: "oren",
        lastname: "lahav",
        age: 12,
        isGlass: true
    },
    {
        firstname: "uzi",
        lastname: "shoshani",
        age: 14,
        isGlass: false
    },
    {
        firstname: "zehavi",
        lastname: "zahav",
        age: 20,
        isGlass: false
    }
]
//1. filter 
let items = persons.filter((item) => item.isGlass == true)
console.log(items)
//2. map 
console.log("heart")
let heart = persons.map((item) => {
    if (item.age > 13) {
        item.heart = "❤️"
    }
    else {
        item.heart = "🥰"
    }
    return item
});
console.log(heart)
