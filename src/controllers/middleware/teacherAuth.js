import express from 'express';

const app = express()

const TeacherAuth = app.use((req, res, next) => {
    if(req.session.teacher){
        req.identity = req.session.teacher;
        next();
    }
    else{
        // res.render("errors/404");
        res.redirect("/");
        return;
    }

})

export default TeacherAuth;
