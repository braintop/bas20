let books = [
    {
        "title": "zamar1",
        "author": "ffff",
        "year": 100,
        "available": true,
        "id": 0,
        "isLoggedin": true
    },
    {
        "title": "zamar2",
        "author": "ffff",
        "year": 100,
        "available": false,
        "id": 1,
        "isLoggedin": false
    },
    {
        "title": "zamar3",
        "author": "ffff",
        "year": 1986,
        "available": true,
        "id": 2,
        "isLoggedin": true

    },
    {
        "title": "zamar4",
        "author": "ffff",
        "year": 2025,
        "available": true,
        "id": 3,
        "isLoggedin": false

    }
]

   
exports.get = function (req, res) {
    res.status(200).json(books)
}

exports.create = function (req, res) {
    let book = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        available: req.body.available
    }
    book.id = books.length == 0 ? 0 : books[books.length - 1].id + 1
    books.push(book)
    res.status(200).json(books)
}


exports.getById = function (req, res) {
    let item = books.find((item) => item.id == req.params.id)
    if (item == undefined) {
        res.status(200).json({ message: "item not found" });
        return;
    }

    console.log(item)
    res.status(200).json(item)
}

exports.delete = function (req, res) {
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

}

exports.update = function (req, res) {
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
}
