import Student from "../../models/student.js";

export const dashboard = async (req,res) => {
    const data = await Student.findOne({ where:{ id: req.session.student.id }, raw: true });
    console.log(data);
    res.render("student/dashboard",{ viewData: { student: data } });
}
