import express  from "express";
import { createStudentRecord, createTeacherGet, createTeacherPost, dashboard, dashboardDeleteStudent, editStudent, studentCreate, updateStudent } from "../controllers/teacherController.js";

const TeacherRoute = express.Router();
TeacherRoute.get('/dashboard', dashboard );
TeacherRoute.get('/dashboard/student/:studentId/edit', editStudent );
TeacherRoute.post('/dashboard/student/:studentId/edit', updateStudent );
TeacherRoute.get('/student/:studentId/delete', dashboardDeleteStudent );
TeacherRoute.get('/student/create', studentCreate );
TeacherRoute.post('/student/create', createStudentRecord );
TeacherRoute.get('/create', createTeacherGet );
TeacherRoute.post('/create', createTeacherPost );


export default TeacherRoute;
