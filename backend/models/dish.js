const mongoose = require("mongoose")

const Schema = mongoose.Schema

const dishSchema = new Schema({
    date: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
})

const Dish = mongoose.model('Dish', dishSchema)

module.exports = Dish 