
const express = require('express');
const path = require('path');
const members = require('./Members')

const app = express()
const logger = require('./middleware/logger')
app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/members',require('./routes/api/members'))
/*

By this you have to use different routes for different static pages , not an ideal way , so use static
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
*/


// init middleware
app.use(logger)

//set static folder

//app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('home',{title:"Member app",members})
})



app.listen(3000)