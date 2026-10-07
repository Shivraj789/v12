const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');

app.get('/',(req ,res) =>{
    res.render('main.ejs')
})

app.get('/service',(req ,res) =>{
    res.render('service.ejs')
})
app.get('/contact',(req ,res) =>{
    res.render('contact.ejs')
})

app.get('/pricing',(req ,res) =>{
    res.render('pricing.ejs')
})

app.get('/service/delhi',(req ,res) =>{
    res.render('delhi.ejs')
})

app.get('/service/mumbai',(req ,res) =>{
    res.render('mumbai.ejs')
})
app.get('/service/Bangalore',(req ,res) =>{
    res.render('index.ejs')
})
app.listen(3000)