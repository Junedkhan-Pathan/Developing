const mongoose = require('mongoose')

// Table: status			
// field	DataType	Size	Constraints
// statusId	integer	9	primary key
// status	varchar	20	not null

let statusSchema = new mongoose.Schema({
    Status:{
        type:String
    }
})

let statusModel = mongoose.model("status",statusSchema)
module.exports = statusModel
			