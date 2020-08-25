import express from 'express'
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import router from './routes/userRoute'
import bodyParser from 'body-parser'
dotenv.config();
const mongodbUrl = config.MONGODB_URL;

const app = express();
app.use(bodyParser.json())
mongoose.connect(mongodbUrl,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).catch(error=>console.log(error.reason))
    
app.use("/api/users",router)
app.get("/api/products/:id",(req,res)=>
{
     
    const productId=req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
    res.send(product)
    else
    res.status(401).send({msg:"$)                                                                                                                              $ PRODUCT NOT FOUND"})
})


app.get("/api/products",(req,res)=>
{
    res.send(data.products)
})


app.listen(5000, ()=>
{
    console.log("server created")
})