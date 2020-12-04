const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache:true
})

server.get('/', function(req, res) {

    return res.render('landing', {items: recipes})
})

server.get('/about', function(req, res) {

    return res.render('about')
})

server.get('/recipes', function(req,res){
    return res.render('recipes', {items:recipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipes = [2]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    console.log(recipes[recipeIndex]);
  })

server.listen(5000, function(){
    console.log("server is running")
})
