const express = require("express");

const app = new express();
const port = 3001;

app.get("/", (req, res) => res.json({"abc": "123"}).status(200));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
