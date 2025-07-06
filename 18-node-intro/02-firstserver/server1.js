let http = require("http")
let myServerFunction = function (req, res) {
    console.log("hi")
    res.write("hello world")
    res.end()
}
let server = http.createServer(myServerFunction);
server.listen(3000)