const {BagModel}=require("../models/bag.model")
const {Router}=require("express")

const {SaveModel} =require('../models/save.model')
const cartRouter=Router()
const {OrderModel} =require('../models/order.model')

cartRouter.get('/',async(req,res)=>{
    try {
        const {userId}=req.body
     
        const data = await BagModel.find({userId})
        res.send({data,msg:"Your Items"})

    } catch (error) {
        res.send(error.message)
        
    }
})



cartRouter.post('/',async(req,res)=>{
try {
    const data1 = req.body
    const newPost= new BagModel(data1)
   await newPost.save()
    res.send({msg:"Posted Data",data1})
} catch (error) {
    res.send(error.message)
}
})

cartRouter.patch('/update/:id',async(req,res)=>{
try {
    const data = req.body;
    const _id = req.params.id;
    const updated =await BagModel.findByIdAndUpdate({_id},data)
    res.send({msg:"Item updated",updated})
} catch (error) {
    res.send(error.message)
}
})
cartRouter.delete('/put',async(req,res)=>{
    try {
    const {userId}=req.body
        const data = await BagModel.deleteMany({userId})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

cartRouter.delete('/delete/:id',async(req,res)=>{
try {
    const _id = req.params.id;
    const deleted=await BagModel.findByIdAndDelete({_id})
    if(deleted){
        res.send("Item Delted")
    }else{
        res.send("Item Not Found ")
    }
} catch (error) {
    res.send(error.message)
}
})
cartRouter.post('/orders',async(req,res)=>{
    try{
      
    const data = await OrderModel.insertMany(req.body)
        res.send({msg:"Posted Data",data})
    }catch(err){
        res.send(err.message)
    }
})
cartRouter.get('/orders',async(req,res)=>{
    try{
      const {userId}=req.body
        const data = await OrderModel.find({userId})
            res.send({msg:"Your Data",data})
        }catch(err){
            res.send(err.message)
        }
})
cartRouter.post('/save',async(req,res)=>{
    try {
        const data1 = req.body
        const newPost= new SaveModel(data1)
        await newPost.save()
        res.send({msg:"Posted Data",data1})
    } catch (error) {
        res.send(error.message)
    }

})
cartRouter.get('/saveget',async(req,res)=>{
    const {userId}=req.body
try {
    const data =await SaveModel.find({userId})
    res.send({data,msg:"Your Items"})
} catch (error) {
    res.send(error.message)
    
}
})
cartRouter.delete('/savedelete/:id',async(req,res)=>{
try {
    const _id =req.params.id 
    const data = await SaveModel.findByIdAndDelete({_id})
    res.send(data)
} catch (error) {
    res.send(error.message)
    
}
})

module.exports={cartRouter}