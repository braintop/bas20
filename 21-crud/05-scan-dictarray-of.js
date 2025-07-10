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
//of  
for (let item of items) {
    console.log(item)
}

for (let item of items) {
    console.log(item.title)
    if (item.title === "tshirt") {
        console.log("tshirt exist")
    }
}


