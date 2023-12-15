const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    total: {
        type: Number
    },
   elements: {
        food: { type: String },
        quantity: { type: Number }
    },
    isTaken: {
        type: Boolean,
        default: false
    },
    isFinished:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Order", orderSchema);