import { DGId } from "./utils/utils.js";

const passwordInput = DGId("password");
const confirmPasswordInput = DGId("confirmPassword");

const cpasswordErrorBox = DGId("cpassword-error");
const submitButton = DGId("create-teacher");

function checkPassword(){

    if(passwordInput.value != confirmPasswordInput.value){
        submitButton.disabled = true;
        cpasswordErrorBox.innerHTML = `<span class="badge bg-danger">Password didn't match</span>`;
    
    }
    else{
        submitButton.disabled = false;
        cpasswordErrorBox.innerHTML = ``;

    }

}

setInterval(checkPassword,2000);