import Express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import LeadsDB from "../model/leadschema.js";
dotenv.config()

const app = Express.Router();

app.get("/", (req, res) => {
    res.status(200).json("Leads Creation page Opened");
});

app.post("/", (req, res) => {
    const { name, number, email, address, proffesion, link, shareby, shareto, status } = req.body;
    // const data = { name, number, email, address, proffesion, link, shareby, shareto, status };
    // const token = jwt.sign(data.toString(), process.env.JWT_SECRET);
    LeadsDB.findOne({ number: number })
        .then(async foundname => {
            if (foundname) {
                if (foundname.number == number) {
                    console.log("existing");
                    res.status(201).json("Already in DB");
                }
            }
            else {
                const user = new LeadsDB({
                    name: name,
                    number: number,
                    email: email,
                    address: address,
                    proffesion: proffesion,
                    link: link,
                    shareby: shareby,
                    shareto: shareto,
                    status: status
                });
                await user.save()
                    .then(
                        res.status(201).send(user)
                    )
                    .catch(err => {
                        console.log(err);
                    })
            }
        })
        .catch(err => {
            console.log(err);
        })
});

app.put("/", async (req, res) => {
    const { name, number, email, address, proffesion, link, shareby, shareto, status } = req.body;
    // const data = { name, email, phone, gender, dob };
    await LeadsDB.updateOne(
        { number: number },
        {
            name: name,
            email: email,
            address: address,
            proffesion: proffesion,
            link: link,
            shareby: shareby,
            shareto: shareto,
            status: status
        }, { upsert: true })
        .catch((err) => {
            console.log("error in updating the user");
            console.log(err);
            res.status(401)
        })
    console.log("user updated");
    res.status(201).send("User Updated");
});

app.delete("/", async (req, res) => {
    const { number } = req.body;
    await LeadsDB.deleteOne({
        number: number
    }).then(function () {
        console.log("Data deleted");
        res.status(202).send("User Deleted"); // Success
    }).catch(function (error) {
        console.log(error); // Failure
    });
});


export default app;