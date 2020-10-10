const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Task = require("./models/Task")
const cors = require("cors")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://luozhongtain:lzt611789@cluster0.lg159.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true})
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MONGO DB has been connected")
})

app.post('/register',(req,res) => {
    const task = new Task({
        selectTask: req.body.selectTask,
        
        TaskTitle : req.body.TaskTitle,
        TaskDescription : req.body.TaskDescription,
        ExpiryDate: req.body.ExpiryDate,

        isRequire: req.body.isRequire,
        Reward: req.body.Reward,
        Numbers:req.body.Numbers
    });

    task.save()
    .catch((err)=>console.log(err));
    res.json(('saved to db:' + task));
})



app.listen(8000,(req,res)=>{
    console.log("Server is running on port 8000")
})

