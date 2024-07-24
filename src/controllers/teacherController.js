import Student from "../../models/student.js";
import Teacher from "../../models/teacher.js";
import bcrypt from "bcryptjs";

export const dashboard = async(req,res) => {

    req.query.size = req.query?.size ? Number(req.query.size) : 10;
    const offset = req.query?.page ? req.query.page * req.query.size : 0; 
    const data = await Student.findAll({ include:Teacher, limit: req.query.size, offset: offset });
    const count = await Student.count();

    res.render("teacher/dashboard",{ viewData: { students: data, count: count, page: req.url } });
}

export const dashboardDeleteStudent = async(req,res) => {
    await Student.destroy({ where: { id: req.params.studentId } });
    res.redirect("/teacher/dashboard");
}

export const studentCreate = async (req,res) => {

    res.render("teacher/studentCreate", { viewData: { page: req.url } });

}

export const createStudentRecord = async (req,res) => {

    const unique = await Student.findOne({ where: { rollNo: req.body.rollNo }, raw: true });

    let field = {};
    field.errors = false;

    if(req.body.name.length < 3){
        field.name =  "Name is too small";
        field.errors = true;
    }
    if(req.body.dob){
        if(new Date(req.body.dob) >= new Date()){
            field.dob =  "Invalid DOB";
            field.errors = true;
        }
    }
    if(!req.body.dob){
        field.dob =  "DOB is required";
        field.errors = true;
    }

    if(req.body.score > 100 || req.body.score < 0){
        field.score =  "Score must be between 0 to 100";
        field.errors = true;
    }
    if(field.errors){
        res.render("teacher/studentCreate",{ viewData: { student: req.body, page: req.url, errors: { field: field} } });
        return ;
    }
    

    if(!unique){
        Student.create({
            name: req.body.name,
            rollNo: req.body.rollNo,
            score: req.body.score,
            teacherId: req.identity.id,
            dob: new Date(req.body.dob)
        });
        res.render("teacher/studentCreate", { viewData: { page: req.url, success: { main: [ "Student Record Added" ] } } })
        return ;
    }
    res.render("teacher/studentCreate", { viewData: { student:unique , page: req.url, errors: { main: [ "This Student record already exists" ] } } });
}

export const editStudent = async(req,res) => {

    let data = await Student.findByPk(req.params.studentId);
    
    res.render("teacher/editStudent",{ viewData: { student: data, page: req.url } });
}

export const updateStudent = async (req,res) => {

    Student.update({
        name: req.body.name,
        score: req.body.score,
        dob: new Date(req.body.dob)
    },{
        where: { id: req.params.studentId },
        raw: true
    }).then(async (student) => {
        let data = await Student.findByPk(req.params.studentId);

        res.render("teacher/editStudent",{ viewData: { student: data, page: req.url, success: { main: [ "Updated student record"] } } });


    }).catch(async err => {
        let data = await Student.findByPk(req.params.studentId);
        res.render("teacher/editStudent",{ viewData: { student: data, page: req.url, errors: { main: [ "Failed to update student record"] } } });
    })
}



export const createTeacherGet = async(req,res) => {

    res.render("teacher/create",{ viewData: { page: req.url } });
}

export const createTeacherPost = async(req,res) => {

   

    let teacher = await Teacher.findOne({ where: { email: req.body.email }, raw: true });
    if(teacher){
        res.render("teacher/create",{ viewData: { teacher: teacher, page: req.url, errors: { main: [ "Account already exists"], field: { email: "Account already exists" } } } });
        return ;
    }

    let field = {};
    field.errors = false;

    if(req.body.firstName.length < 3){
        field.firstName =  "First name is too small";
        field.errors = true;
    }
    if(req.body.lastName.length < 3){
        field.lastName =  "Last name is too small";
        field.errors = true;
    }
    if(req.body.password.length < 8){
        field.password =  "Enter a strong password";
        field.errors = true;
    }

    if(field.errors){
        req.body.password = undefined;
        res.render("teacher/create",{ viewData: { teacher: req.body, page: req.url, errors: { field: field} } });
        return ;
    }
    

    try{
        let password = await bcrypt.hash(req.body.password,10)
        await Teacher.create({ 
            firstName: req.body.firstName, 
            lastName: req.body.lastName, 
            email: req.body.email,
            password: password
        });
        
        res.render("teacher/create",{ viewData: { page: req.url, success: { main: [ "Account Created"] } } });
    }
    catch(err){
        res.render("teacher/create",{ viewData: { page: req.url, errors: { main: [ "Failed to create account"] } } });
    }
}