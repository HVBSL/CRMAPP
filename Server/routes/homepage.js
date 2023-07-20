import { Router } from "express";
import mongoose from "mongoose";
import LeadsDB from "../model/leadschema.js";

const app = Router();

let result;

app.get("/", async (req, res) => {
    result = await LeadsDB.find();
    res.status(200).send(result)
});
app.post("/", async (req, res) => {
    result = await LeadsDB.find();

    console.log(result);
    res.status(200).json(result);
})


export default app;