// Creating HTTP Server
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path"); //inbuilt module

//connecting mongodatabase file
const connectDB = require('./server/routes/database/connection');

const app = express();// initialisation

dotenv.config({path : 'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

app.use('/assets', express.static(path.join(__dirname, "../assets")));

//set view Engine
app.set("view engine","ejs") //we had initialized view engine so no need to specify extension(.ejs) when call ejs file

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/css/js")))

//load routes
app.use('/',require('./server/routes/router'))

app.listen(PORT ,()=>{console.log(`server is running at http://localhost:${PORT}`)});
