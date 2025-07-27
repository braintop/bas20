let express = require("express")
let app = express()
app.use(express.json())

var booksRouter = require("./api/books/bookRoute")
app.use('/api/books', booksRouter);
app.listen(4000)


