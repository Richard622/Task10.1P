const mongoose = require("mongoose")
const validator = require("validator")
const server = require("../server.js")


const taskSchema = new mongoose.Schema(
    {  
        selectTask:String,
        
        TaskTitle: String,
        TaskDescription:String,
        ExpiryDate: Date,
      
        isRequire:String,
        Reward:String,
        Numbers:String
    }
)


module.exports = mongoose.model("task", taskSchema);