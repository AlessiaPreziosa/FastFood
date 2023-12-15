const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    foodId: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    value: {
        type: String,
        required: true,
        enum: {
            values: ['Hamburger', 'Meal', 'Snacks', 'Drinks', 'Chips', 'Salads']
        }
    },
    price:{
        type: Number,
        required: true
    },
    calories: Number,
    fats: Number,
    carbs: Number,
    protein: Number,
    desc: String
});

module.exports = mongoose.model("Food", foodSchema);