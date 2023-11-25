const express =require('express');
const app=express();
const mongoose=require('mongoose');
const category=require('./api/routes/category');
const product=require('./api/routes/product');
const userroute=require('./api/routes/user');
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());

// Your other routes and configurations...



const bodyParsor=require('body-parser');
const fileupload=require('express-fileupload');
mongoose.connect('mongodb+srv://priya-saran:priya@cluster0.nxbgw6r.mongodb.net/');

mongoose.connection.on('error',err=>
{
    console.log('connection failed');
})

mongoose.connection.on('connected',connected=>{
   console.log ('connected with database');
})

app.use(bodyParsor.urlencoded({extended:false}));
app.use(fileupload({
    useTempFiles:true
}))
app.use(bodyParsor.json());

app.use('/product',product)
app.use('/user',userroute)
app.use('/category',category)

app.use('*',(req,res,next)=>
{
    res.status(500).json({
        error:'not  found '
    })
})
module.exports=app;