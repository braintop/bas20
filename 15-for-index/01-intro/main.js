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
        age: 18,
        isGlass: false
    },
    {
        firstname: "zehavi",
        lastname: "zahav",
        age: 12,
        isGlass: false
    }
]
// 1. הדפס באמצעות לולאה את כל ה persons 
// 2. הדפס באמצעות לולאה את כל השמות הפרטיים של persons 
// 3. הדפס את האדם עם הגיל הכי גבוה באמצעות לולאה 
// 4. הדפס את ממוצע הגילאיים 
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i])
}
//i מאותחל אוטומטית ל 0 וגדל ב 1 בכל איטריציה 
for (let index in persons) {
    console.log(persons[index])
}

for (let person of persons) {
    console.log(person)
}
