const express=require('express');
const app=express();
const indexRoute=require("./routes/indexRoutes")
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use("/",indexRoute )

app.listen(3000)