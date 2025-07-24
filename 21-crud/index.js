let express = require("express")
//.       items.  get.   get/:id.   
//crud - create, read - get by id,  update , delete 
//.       post.   get.    put.    delete 

let items = [

]

let app = express()
app.use(express.json())// access to req.body 
app.get("/", function (req, res) {
    res.status(200).json(items)
})
app.get("/:id", function (req, res) {
    console.log(req.params)
    let index = -1;
    for (let i = 0; i < items.length; i++) {
        if (req.params.id == items[i].id) {
            index = i
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" });
        return;
    }
    res.status(200).json(items[index])
})

app.post("/", function (req, res) {
    //console.log(req.body)
    //1. add id 
    //2. add to db 
    let id = -1;
    if (items.length == 0) {
        id = 1
    }
    else {
        id = items[items.length - 1].id;
        id++;
    }
    let item = {
        id: id,
        title: req.body.title,
        completed: req.body.completed
    }
    items.push(item)
    res.status(200).json(items)

})

app.delete("/:id", function (req, res) {
    let idToDelete = +req.params.id
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < items.length; i++) {
        if (idToDelete === items[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;
    }
    items.splice(index, 1);
    res.status(200).json(items)

})

app.delete("/api/:title", function (req, res) {
    let title = req.params.title
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < items.length; i++) {
        if (title === items[i].title) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;//stop function
    }
    items.splice(index, 1);
    res.status(200).json(items)
})

//update 
app.put("/", function (req, res) {
    let item = req.body;
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < items.length; i++) {
        if (req.body.id == items[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;//stop function
    }
    items[index] = item;
    res.status(200).json(items)

})

app.listen(3000)