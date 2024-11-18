const mongoose = require('mongoose')

const FashionJewellarySchema = new mongoose.Schema({
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

const FashionJewellary = mongoose.model("Fashion Jewellery", FashionJewellarySchema)

module.exports = FashionJewellary



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 