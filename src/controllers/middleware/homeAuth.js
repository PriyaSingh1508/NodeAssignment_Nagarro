import express from 'express';

const app = express()

const HomeAuth = app.use((req, res, next) => {
    // console.log(req.session);
    // if(req.session.teacher){
    //     res.redirect("/teacher/dashboard");
    //     return ;
    // }
    // else if(req.session.student){
    //     res.redirect("/student/dashboard");
    //     return ;
    // }
    next();
})

export default HomeAuth;
