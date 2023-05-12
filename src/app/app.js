const express = require('express');
const morgan = require('morgan');

const app = express();
const statics = __dirname.replace("app", "public")

app.set("port", process.env.PORT || 4000)
app.set("views", "./src/public/view")
app.set("view engine", "pug")

app.use(morgan('dev'));
app.use(express.static(statics));

app.get('/', (req, res) => {
    res.render("page/index")
    res.end()
})

app.get('/contact', (req, res) => {
    res.render("page/contact")
})

app.get('/work', (req, res) => {
    res.render("page/work")
})

module.exports = app;