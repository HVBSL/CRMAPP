import mongoose from "mongoose";

const leadsSchema = new mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    address: String,
    proffesion: String,
    link: String,
    shareby: {
        type: String,
        default: "xxx"
    },
    shareto: {
        type: String,
        default: "yyy"
    },
    status: {
        type: String,
        default: "pending"
    },
});
const LeadsDB = mongoose.model("leads", leadsSchema);

export default LeadsDB;