const express = require("express");
const app = express();

app.listen(4040, () => {
    console.log("servidor corriendo correctamente")
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/public/" + req.url)
})