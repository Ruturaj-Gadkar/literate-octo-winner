const mongoose = require("mongoose");


  mongoose.connect("mongodb://localhost:27017/students");

  const userSchema = new mongoose.Schema({
    firstName: String,
    age: Number
  });

  const SaveInDb = async () => {
  const userModel = mongoose.model("users", userSchema);
  let data = new userModel({ firstName: "sachin", age: 26 });
  let result = await data.save();
  console.log(result);
};

const UpdateInDb=async()=>{

    const userModel = mongoose.model("users", userSchema);
    let updatedata=await userModel.updateOne(
        {firstName:"sachin"},
        {
            $set:{age:27,firstName:"Mahi"}
        }
    )
   console.log(updatedata);
}

const DeleteInDb=async()=>{

    const userModel=mongoose.model("users",userSchema);
    let data=await userModel.deleteOne(

          {age:27}

    )

    console.log(data);
}

const findInDb=async()=>{

    const model=mongoose.model("users",userSchema);
   const data= await model.find();
    console.log(data);
}
findInDb()