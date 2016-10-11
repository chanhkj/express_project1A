var express = require('express')

var app = express()
var port = 4000

var path = require('path')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  // res.send('homepage')
  res.render('index', {name: 'Glen Choo'})
})
app.use(express.static('public'));

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
