let express = require("express")
let app = express()
app.use(express.json())

let books = [



]

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
app.get("/books/count/year-range", function (req, res) {
    // נשלוף את הפרמטרים מה-query string ונמיר למספרים
    let from = +req.query.from;
    let to = +req.query.to;

    // בדיקת תקינות קלט
    if (isNaN(from) || isNaN(to)) {
        res.status(400).json({ message: "Invalid year range parameters" });
        return;
    }

    // סופרים את הספרים בטווח השנים כולל
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].year >= from && books[i].year <= to) {
            count++;
        }
    }

    res.status(200).json({ count: count });//{count:2}
});




app.listen(3000)


