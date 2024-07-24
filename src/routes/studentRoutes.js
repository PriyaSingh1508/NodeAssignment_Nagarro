import express  from "express";

import { dashboard } from "../controllers/StudentController.js";

const StudentRoute = express.Router();
StudentRoute.get('/dashboard', dashboard );

export default StudentRoute;