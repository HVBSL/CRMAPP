import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import leadscreation from "./routes/leads.js";
import axios from "axios";
import leads from "./routes/homepage.js";
// import google from "./routes/google.js";
import follow from "./routes/follow.js";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/leadsDB")
    .then(() => {
        console.log("Database Connected");
    }).catch(err => {
        if (err) {
            return console.log(err);
        }
    });

mongoose.set('strictQuery', true);



app.use(express.static("public"));
app.use(cors());
app.use(axios);
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('view engine',"jade");

app.use("/home", leads)
app.use("/auth", auth);
app.use("/leads", leadscreation);

app.use("/follow", follow);
// app.use("/auth/google",google);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Server Running"));