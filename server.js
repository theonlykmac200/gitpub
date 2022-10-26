const express = require("express")
const drinks = require("./models/drinks")
const food = require("./models/food")

const app = express()

//since you have a home route, why not link the user to /drinks and /food in /

app.get("/", (req, res) => {
    res.send(`Welcome to the Gitpub App!
    <button><a href='/drinks'>DRINKS</a></button>
    <button><a href='/food'>FOOD</a></button>
    `)
} )

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks
    })
})
app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {
        drinks: drinks[req.params.id]
    })
})

app.get("/food", (req, res) => {
    res.render("food_index.ejs", {
        allFood: food
    })
})
app.get("/food/:id", (req, res) => {
    res.render("food_show.ejs", {
        food: food[req.params.id],
    })
})


app.listen(3000, ()=> {
    console.log("we're listening")
})