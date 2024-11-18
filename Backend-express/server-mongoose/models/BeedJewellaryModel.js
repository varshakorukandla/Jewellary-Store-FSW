const mongoose = require('mongoose')

const BeedJewellarySchema = new mongoose.Schema({
    title: { // Property/Filed title
        type: String, // Data type of the Property
        required: true,// Nullable(false) or NotNullable(true) 
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
        // unique:true
    },
    brand: {
        type: String,
        required: true,
    },
})

const BeedJewellary = mongoose.model("Bead Jewellery", BeedJewellarySchema)

module.exports = BeedJewellary



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 