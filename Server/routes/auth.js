import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import jwt from "jsonwebtoken";
import passport from "passport";
import UserDB from '../model/authschema.js';
import strategy from '../strategy.js';
dotenv.config()

const app = express.Router();
app.use(bodyparser.urlencoded({ extended: true }));

var Status;

mongoose.set('strictQuery', true);

const generateToken = (id, token) => {
    return jwt.sign({ id, verify: token }, process.env.JWT_SECRET)
}

app.route("/")
    .get(async (req, res) => {
        const result = await UserDB.find()

        res.status(200).json(result ? "no users yet" : result);
    })

    .post(async (req, res) => {
        const { name, email, phone, gender, dob } = req.body;
        UserDB.findOne({ number: phone }).then(async (foundUser) => {
            if (foundUser) {
                console.log("user available");
                if (foundUser.number == Number(phone)) {
                    Status = {
                        statusName: "In root page",
                        status: "User available, Login Successful"
                    };
                    console.log("no avail");
                    if (!foundUser.name) {
                        const user = new UserDB({
                            name: name,
                            email: email,
                            number: phone,
                            gender: gender,
                            dob: dob
                        });

                    }

                    return res.status(202).send(Status);
                }
            }
            if (!foundUser) {

                console.log(phone);
                const user = new UserDB({
                    number: phone
                });
                await user.save();
                generateToken(user.id, user.token);
                res.status(201).json(user.token + " created Successful");

            }
        })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(Status);
            })

    })

    .put(async (req, res) => {
        const { name, email, phone, gender, dob } = req.body;
        // const data = { name, email, phone, gender, dob };

        await UserDB.updateOne(
            { number: phone },
            {
                name: name,
                email: email,
                dob: dob,
                gender: gender
            }, { upsert: true });
        console.log("user updated");
        res.status(201).send("User Updated");
    });

passport.use(strategy);
app.use(passport, function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


export default app;