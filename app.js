const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");

const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

module.exports = app;