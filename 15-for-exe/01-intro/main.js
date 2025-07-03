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
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i])
}
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].firstname)
}
let max = persons[0].age;//reference 
for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > max) {
        max = persons[i].age
    }
}//end of for 
//יש לי ביד רק את הערך של הגיל המקסימאלי 
console.log(max)// 18 

let personsMax = persons[0];//reference 
for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > personsMax.age) {
        personsMax = persons[i]
    }
}//end of for 

console.log(personsMax)// יש לנו את כל פרטי האדם 
console.log(personsMax.age)