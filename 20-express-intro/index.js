let express = require("express")
let app = express()
let counter = 0

app.get("/", (req, res) => {
    res.status(200).send("hello express")
})
app.get("/plus", function (req, res) {
    counter++
    console.log(counter)
    res.status(200).send("avi:" + counter)
})
app.get("/minus", function (req, res) {
    counter--
    res.status(200).send("" + counter)
})
app.listen(4000)