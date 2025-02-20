const express=require('express');
require('dotenv').config()
const app=express();
const indexRoute=require("./routes/indexRoutes")
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use("/",indexRoute )

app.listen(3000)