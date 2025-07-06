let http = require("http")
let serverFunc = function (req, res) {
    let path = req.url
    if (path === "/") {
        res.write("home")
    }
    else if (path === "/persons") {
        res.write("persons ....")
    }
    else if (path === "/products") {
        res.write("products ....")
    }
    else {
        res.write("i dont know ....")
    }
    res.end()
}
let server = http.createServer(serverFunc)
server.listen(3000)
