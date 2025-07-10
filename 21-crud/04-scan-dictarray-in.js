let items = [
    {
        "id": 1,
        "title": "ball",
        "completed": false
    },
    {
        "id": 2,
        "title": "tshirt",
        "completed": false
    },
    {
        "id": 3,
        "title": "Mezuza",
        "completed": false
    }
]
//in  is index 
for (let index in items) {
    if (items[index].title === "tshirt") {
        items.splice(index, 1);
    }
}

