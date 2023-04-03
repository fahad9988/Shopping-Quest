const express = require('express');
const { WomenModel } = require('../models/women.model');






const womenRouter = express.Router();



womenRouter.get("/", async (req, res) => {
    let { search, min, max, page, limit } = req.query;
    search = search || "";
    min = min || 1;
    max = max || 100000;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 40;
  
    try {
        const count = await WomenModel.countDocuments({
            $and: [
              { product: { $regex: search, $options: "i" } },
              { price: { $gte: min, $lte: max } },
            ],
          });
  
      const skip = (page - 1) * limit;
      const totalPages = Math.ceil(count / limit);
  
      const query = {
        $and: [
          { product: { $regex: search, $options: "i" } },
          { price: { $gte: min, $lte: max } },
        ],
      };
      const data = await WomenModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
  
      res.send({ data, totalPages });
    } catch (err) {
      res.send(err.message);
      console.log("err:", err);
    }
  });
  
womenRouter.get("/single/:id", async (req, res) => {
    const ID = req.params.id
    try{
       
        let data = await WomenModel.findOne({_id:ID})
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
womenRouter.get("/search", async (req, res) => {
    let { brand, min, max, page, limit } = req.query;
    brand = brand || "";
    min = min || 1;
    max = max || 100000;
    page = page || 1;
    limit = limit || 10;
  
    try {
      const query = {
        $and: [
          { brand: { $regex: brand, $options: "i" } },
          { price: { $gte: min, $lte: max } },
        ],
      };
      const data = await WomenModel.find(query)
        .limit(limit)
        .skip((page - 1) * limit);
      const count = await WomenModel.countDocuments(query);
      const totalPages = Math.ceil(count / limit);
      res.send({ data, totalPages });
    } catch (err) {
      res.send(err.message);
      console.log("err:", err);
    }
  });
  

womenRouter.post("/", async (req, res) => {
    let payload = req.body
    try{
        let data = new WomenModel(payload)
        await data.save();
        res.send("Data Sent successfully!")
    }catch(err){
        console.log('err:', err)
    }
})
womenRouter.patch("/:id", async (req, res) => {
    let ID = req.params.id
    let payload = req.body
    try{
        let data = await WomenModel.findByIdAndUpdate({_id:ID},payload)
        res.send("Data Updated successfully!")
    }catch(err){
        console.log('err:', err)
    }
})
womenRouter.delete("/:id", async (req, res) => {
    let ID = req.params.id
    try{
        let data = await WomenModel.findByIdAndDelete({_id:ID})
        res.send("Data Deleted successfully!")
    }catch(err){
        console.log('err:', err)
    }
    
})




module.exports = {
    womenRouter
}