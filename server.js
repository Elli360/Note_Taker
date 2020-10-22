const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(` listening on ${PORT}`));
