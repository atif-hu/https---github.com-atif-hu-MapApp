const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv');
const { json } = require('express');
const pinRoute=require('./routes/pins.js');
const users=require('./routes/users.js');
const app=express();

dotenv.config()

app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>console.log(err));

app.use('/api/pins',pinRoute )
app.use('/api/users',users)

app.listen(8800,()=>{
    console.log("Backend server is running")
}) 