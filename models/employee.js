const mongoose = require("mongoose")
const schema=mongoose.Schema(
    {
        "id" :String,
        "name" :String,
        "department" :String,
        "phoneno" :String,
        "email" :String,
        "address" :String
    }
)

let employeemodel = mongoose.model("employees",schema)
module.exports={employeemodel}