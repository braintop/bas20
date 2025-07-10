let express = require("express")
//crud - create, read , update , delete 
//.       post.   get.    put.    delete 


let app = express()
app.get("/", function (req, res) {
    res.status(200).send("hello world")
})
app.listen(3000)