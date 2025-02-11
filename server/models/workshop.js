const mongoose = require('mongoose')

//Workshops Model
const workshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    },
    prerequisites: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: ''
    },
    brochure: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: true })
workshopSchema.method('transform', function () {
    let obj = this.toObject()
    obj.id = obj._id;
    delete obj._id;
    return obj;
});
module.exports = mongoose.model("Workshop", workshopSchema);