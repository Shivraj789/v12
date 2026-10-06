const express=require('express')
const app=express()

app.set('view engine', 'ejs');

app.get('/',(req ,res) =>{
    res.render('index.ejs')
})

app.get('/service',(req ,res) =>{
    res.render('')
})
app.get('/contact',(req ,res) =>{
    res.render('contact.ejs')
})

app.listen(3000)