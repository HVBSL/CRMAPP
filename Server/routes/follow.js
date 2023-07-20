import Express from "express";
import LeadsDB from "../model/leadschema.js";

const app = Express.Router();

app.get("/", (req, res) => {
    res.status(200).json(crmDB);
});

app.post("/", (req, res) => {
    const { name, Status } = req.body;
    LeadsDB.findOne({ name: name })
        .then(async founduser => {
            if (founduser) {
                console.log(founduser);
                // res.json(founduser.status);
                res.status(201).json("User Created", founduser.status);
            }
            else {
                const user = new LeadsDB({
                    name: name,
                    type: Status
                });
                await user.save()
                    .then(
                        res.status(201).json("User saved", founduser)
                    )
                    .catch(err => {
                        console.log(err);
                        res.status(401).json(err);
                    })
            }
        })
});

app.put("/", async (req, res) => {
    const { number, status } = req.body;
    // const data = { name, email, phone, gender, dob };
    await LeadsDB.updateOne(
        { number: number },
        {
            status: follow
        }, { upsert: true });
    console.log("user updated");
    res.status(201).send("User Updated");
});


export default app;