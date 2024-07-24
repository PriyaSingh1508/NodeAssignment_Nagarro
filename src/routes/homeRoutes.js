import express  from "express";
import { index, login, logout } from "../controllers/homeController.js";

const HomeRoute = express.Router();
HomeRoute.get('', index );
HomeRoute.get('/logout', logout );
HomeRoute.post('', login );

export default HomeRoute;
