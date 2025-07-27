let express = require("express")
let app = express()
app.use(express.json())

var booksRouter = require("./api/books/bookRoute")
app.use('/api/books', booksRouter);

var playerRouter = require("./api/players/playerRoute")
app.use('/api/players', playerRouter);

app.listen(4000)


