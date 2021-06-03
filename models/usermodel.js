const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    S_No: Number,
    Name: String,
    Current_Market_Price: Number,
    Market_Cap:Number,
    Stock_P_E: Number,
    Dividend_Yield: Number,
    ROCE:Number,
    ROE_Previous_Annum: Number,
    Debt_to_Equity:Number,
    EPS: Number,
    Reserve: Number,
    Debt: Number,
})

const user=mongoose.model('user',userSchema);
module.exports=user;