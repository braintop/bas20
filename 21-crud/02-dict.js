//dictionary = מילון 
let p1 = { price: 100, title: "book", subtitle: "harry" }
let p2 = {
    price: 300,
    title: "Mezuza",
    subtitle: "aliza...",
    inStock: 10
}
console.log(p1.price) // 100 
console.log(p1["price"]) // 100 
console.log(p2.title) // Mezuza
console.log(p2.dwdwd) // Mezuza

delete p2.title
console.log(p2)