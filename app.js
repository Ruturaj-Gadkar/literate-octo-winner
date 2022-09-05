const express=require("express");
require("./config");
let users=require("./collection");

const app=express();

app.use(express.json());

app.post("/create",async(req,res)=>{

     let data=new users(req.body);
    let result= await data.save()

      res.send(result);

});


app.get("/list",async(req,res)=>{

    let data=await users.find();
    res.send(data);
})



app.delete("/delete/:_id",async(req,res)=>{

    let data=await users.deleteOne(req.params);
    res.send(data);
})

app.put("/update/:_id",async(req,res)=>{

    let data= await users.updateOne(
        req.params,
       {$set:req.body}
    );
    res.send(data);
})

app.listen(4500)   // app.listen() returns the http server object