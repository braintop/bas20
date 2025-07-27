let players = [
    {
        "id": 0,
        "firstname": "Andre",
        "lastname": "Iguodala",
        "age": 37,
        "Team": "Warriors"
    }, {
        "id": 1,
        "firstname": "Carmelo",
        "lastname": "Anthony",
        "age": 37,
        "Team": "Lakers"
    }]
//add get , post , delete update function to controller 
//add router file
//add to index referancr to routing file and test the server 

exports.get = function (req, res) {
    res.status(200).json(players)
}

exports.create = function (req, res) {
    let player = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        teams: req.body.teams,
        age: req.body.age
    }
    player.id = players.length == 0 ? 0 : players[players.length - 1].id + 1
    players.push(player)
    res.status(200).json(players)
}

exports.getById = function (req, res) {
    let item = players.find((item) => item.id == req.params.id)
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
    for (let i = 0; i < players.length; i++) {
        if (idToDelete === players[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;
    }
    players.splice(index, 1);
    res.status(200).json(players)

}
exports.update = function (req, res) {
    let item = req.body;
    let index = -1;// "1" === 1 false .    but "1" == 1 true 
    for (let i = 0; i < players.length; i++) {
        if (req.body.id == players[i].id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        res.status(200).json({ message: "item not found" })
        return;//stop function
    }
    players[index] = item;
    res.status(200).json(players)
}
