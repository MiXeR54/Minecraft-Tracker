const express = require('express')
const exphbs = require('express-handlebars')
const MongoClient = require('mongodb').MongoClient
port = 3000;

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.use(express.static('public'))


var dbOptioms = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
app.listen(port, () => console.log(`App listening on port ${port}!`))

app.get('/', function (req, res) {
  MongoClient.connect('mongodb+srv://server:123456)@timetracker-n8llr.mongodb.net/test?retryWrites=true&w=majority', dbOptioms, function (err, client) {
    if (err) throw err
    var db = client.db('spigot')
    db.collection('users').find().toArray(function (err, result) {
      if (err) throw err
      else 
      res.render('index', {result: result})
  })
  })
})