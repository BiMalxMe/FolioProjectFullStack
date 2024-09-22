const express=require('express')
const { createPortfolio } = require('./types')
const cors =require('cors')
const { Folio } = require('./db')
const app=express()
app.use(express.json())
app.use(cors())

app.post('/link',async function(req,res){
    const createPayload=req.body
    const parsedPayload=createPortfolio.safeParse(createPayload)
    console.log(parsedPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'Invalid Input types'
        })
    }
   await Folio.create({
    name:createPayload.name,
    description:createPayload.description,
    linkedIn:createPayload.linkedIn,
    Twitter:createPayload.Twitter
   })
   res.json({
    msg:'Data Inputed in MongoDb sucessfully'
   })
})

app.get('/info',async function(req,res){
   const folios= await Folio.find({})
   res.json({
    folios
   })
})

app.listen(3000,function(){
    console.log('Running Server......')
})