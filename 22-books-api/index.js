let express = require("express")
let app = express()
app.use(express.json())

let books = []

app.get("/books", function (req, res) {
    res.status(200).json(books)
})
app.post("/books", function (req, res) {
    let book = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        available: req.body.available
    }
    book.id = books.length == 0 ? 0 : books[books.length - 1].id + 1
    books.push(book)
    res.status(200).json(books)
})

app.get("/books/:id", function (req, res) {
    let index = -1;
    for (let i = 0; i < books.length; i++) {
        if (req.params.id == books[i].id) {
            index = i
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" });
        return;
    }
    res.status(200).json(books[index])
})

app.delete("/books/:id", function (req, res) {
    let idToDelete = +req.params.id
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < books.length; i++) {
        if (idToDelete === books[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;
    }
    books.splice(index, 1);
    res.status(200).json(books)

})

//update 
app.put("/", function (req, res) {
    let item = req.body;
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < books.length; i++) {
        if (req.body.id == books[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;//stop function
    }
    books[index] = item;
    res.status(200).json(books)

})


app.listen(3000)


