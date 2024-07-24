import { DGId } from "./utils/utils.js";

const teacherTabOption = DGId("teacher-tab-option");
const studentTabOption = DGId("student-tab-option");
let teacherTab = DGId("teacher-tab");
let studentTab = DGId("student-tab");


let passwordField = DGId("password");
let showPassword = DGId("show-password");

// teacherTabOption.addEventListener("click",() => {
//     console.log("hey");
//     teacherTab.setAttribute('style', 'display:block !important');
//     studentTab.setAttribute('style', 'display:none !important');
// })

// studentTabOption.addEventListener("click",() => {
//     console.log("hey");

//     teacherTab.setAttribute('style', 'display:none !important');
//     studentTab.setAttribute('style', 'display:block !important');
// })

showPassword.addEventListener("click", () => {

    console.log(passwordField.type);

    switch(passwordField.type){
        case "password":
            passwordField.type = "text";
    console.log(passwordField.type);

        case "text":
            passwordField.type = "password";

    }

})
