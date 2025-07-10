let express = require("express")
//.       items.  get.   get/:id.   
//crud - create, read ,get by id,  update , delete 
//.       post.   get.    put.    delete 

let items = [
    {
        "id": 1,
        "title": "ball",
        "completed": false
    },
    {
        "id": 2,
        "title": "tshirt",
        "completed": true
    },
    {
        "id": 3,
        "title": "Mezuza",
        "completed": false
    }
]

let app = express()
app.get("/", function (req, res) {
    res.status(200).json(items)
})
app.get("/:id", function (req, res) {
    res.status(200).json(items[req.params.id])
})

app.listen(3000)