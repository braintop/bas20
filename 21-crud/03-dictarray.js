let items = [
    {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    }
]

console.log(items[0])
console.log(items[0].title)
console.log(items[2].id)
items.splice(2, 1)
console.log(items)
