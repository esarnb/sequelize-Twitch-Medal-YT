const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");

const port = 3001;
const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(port, () =>console.log(`App listening on port ${port}`));
});