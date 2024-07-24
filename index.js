// npm pacakages
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import  dotenv from 'dotenv';
import session from 'express-session';

dotenv.config();

import HomeRoute from './src/routes/homeRoutes.js';
import TeacherRoute from './src/routes/teacherRoutes.js';
import TeacherAuth from './src/controllers/middleware/teacherAuth.js';
import HomeAuth from './src/controllers/middleware/homeAuth.js';
import StudentRoute from './src/routes/studentRoutes.js';


const PORT = process.env.PORT || 8886;
let app = express();

app.use(session({secret: process.env.ACCESS_TOKEN, resave: true, saveUninitialized: false,rolling: true, expires: new Date(Date.now() + (60*60*1000))}))
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public')); 
app.use("/css",express.static("css"));
app.use("/img",express.static("img"));
app.use("/js",express.static("js"));

//using ejs template engine
app.set("views","./src/views");
app.set("view engine","ejs");

app.use('/',HomeAuth,HomeRoute);
app.use('/teacher',TeacherAuth,TeacherRoute);
app.use('/student',StudentRoute);

app.get('*',(req,res) => res.render("errors/404"));


app.listen(PORT,() => console.log("App Running at port:: "+PORT));