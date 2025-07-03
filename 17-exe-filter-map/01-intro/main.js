let cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2018,
        electric: false
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2022,
        electric: true
    },
    {
        brand: "Mazda",
        model: "CX-5",
        year: 2020,
        electric: false
    }
];
//1. 
for (let car of cars) {
    console.log(car)
}
//2. 
for (let car of cars) {
    console.log(car.model)
}
//3. 
// let e = []
// for(let car in cars){
//     if(car.electric == true){
//         e.push(car)
//     }
// }
let electrics = cars.filter((item) => item.electric == true)
console.log(electrics)
//4 
let newCars = cars.map((item) => {
    if (item.electric) {
        item.icon = "⚡️"
    }
    else {
        item.icon = "⛽"
    }
    return item;
})

console.log(newCars)

