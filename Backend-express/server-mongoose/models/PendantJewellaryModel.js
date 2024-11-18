const mongoose = require('mongoose')

const PendantJewellarySchema = new mongoose.Schema({
    title: { // Property/Filed title
        type: String, // Data type of the Property
        required: true // Nullable(false) or NotNullable(true) 
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        // unique:true
    },
    brand: {
        type:String,
        required: true,
    },
})

const PendantJewellary = mongoose.model("Pendant Jewellery", PendantJewellarySchema)

module.exports = PendantJewellary



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string