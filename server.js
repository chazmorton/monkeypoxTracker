const express = require('express')
const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');
// this line is necessary for us to use relative paths and access our resources directory
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.render('pages/home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})