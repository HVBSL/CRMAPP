import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { GoogleApis } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import config from "../config.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();

const app = Express();

app.use(cors());
app.use(Express.urlencoded({ extended: true }));


const oauth2Client = new OAuth2Client(
    config.web.client_id,
    config.web.client_secret,
    "postmessage"
);

const scopes = config.web.scope;

app.get("/", (req, res) => {
    console.log("Google Authentication page");
    res.status(200).json({ "status": "Google " });
})

app.post('/', async (req, res) => {
    const { tokens } = await oauth2Client.getToken(req.body.code); // exchange code for tokens
    console.log(tokens);

    oauth2Client.setCredentials(tokens);

    res.json({ "status": "Redirect success" });
});

app.post("/refresh-token", async (req, res) => {
    const user = new UserRefreshClient(
        clientId,
        clientSecret,
        req.body.refreshToken
    );
    const { credentials } = await user.refreshAccessToken(); // optain new tokens
    res.json(credentials);
});

export default app;