function validateForm(){
    const fName = document.getElementById("fullName")
    const username = document.getElementById("Username")
    const pass = document.getElementById("password")
    const cnfmPass = document.getElementById("confirmPassword")
    const email = document.getElementById("email")
    const cnfmEmail = document.getElementById("confirmEmail")
    const phoneNo = document.getElementById("phoneNum")
    const dob = document.getElementById("dateOB")
    const age = document.getElementById("age")
    const bldgNum = document.getElementById("bldgNumber")
    const streetName = document.getElementById("strtName")
    const phonePattern = /^\+974 \d{8}$/

    function validateName(){
        if(fName.value === "" || fName.value.length<4){
            document.getElementById("nameError").innerHTML = "Please enter a valid name"
            fName.style.border = "solid 2px red"
            return false
        }else{
            fName.style.border = ""
            document.getElementById("nameError").innerHTML = ""
            return true
        }
    }

    function validateUsername(){
        if(username.value === ""){
            document.getElementById("usernameError").innerHTML = "Please enter a username"
            username.style.border = "solid 2px red"
            return false
        }else{
            username.style.border = ""
            document.getElementById("usernameError").innerHTML = ""
            return true
        }
    }

    function validatePassword(){
        
        if(pass.value === "" && cnfmPass.value === "" || cnfmPass.value.length<6 || pass.value.length<6){
            document.getElementById("passwordError").innerHTML = "Please enter a valid password (length>6)"
            pass.style.border = "solid 2px red"
            cnfmPass.style.border = "solid 2px red"
            return false
        }else if(pass.value != cnfmPass.value){
            pass.style.border = "solid 2px red"
            cnfmPass.style.border = "solid 2px red"
            document.getElementById("passwordError").innerHTML = "Password must match!"
            return false

        }else{
            pass.style.border = ""
            cnfmPass.style.border = ""
            document.getElementById("passwordError").innerHTML = ""
            return true
        }
    }

    function validateEmail(){
        if(email.value === "" || cnfmEmail.value === ""){
            document.getElementById("emailError").innerHTML = "Please enter a valid email e.g (xyz@mail.com)"
            email.style.border = "solid 2px red"
            cnfmEmail.style.border = "solid 2px red"
            return false
        }else if(email.value != cnfmEmail.value){
            email.style.border = "solid 2px red"
            cnfmEmail.style.border = "solid 2px red"
            document.getElementById("emailError").innerHTML = "Email must match!"
            return false

        }else if(email.value === cnfmEmail.value){
            email.style.border = ""
            cnfmEmail.style.border = ""
            document.getElementById("emailError").innerHTML = ""
            return true
        }
    }

    function validatePhone(){
        if(phoneNo.value === ""){
            document.getElementById("phoneError").innerHTML = "Please enter a number"
            phoneNo.style.border = "solid 2px red"
            return false
        }else if(!phonePattern.test(phoneNo.value)){
            document.getElementById("phoneError").innerHTML = "Qatari Numbers are 8 numerical digits"
            phoneNo.style.border = "solid 2px red"
            return false
        }else{
            document.getElementById("phoneError").innerHTML = ""
            phoneNo.style.border = ""
            return true
        }
    }

    function validateDOB(){
        if(dob.value==="" || dob.value>"2024-11-25" || dob.value<"1924-11-25"){
            dob.style.border = "solid 2px red"
            document.getElementById("dobError").innerHTML = "Please enter a valid date of birth"
            return false
        }else{
            document.getElementById("dobError").innerHTML = ""
            dob.style.border = ""
            return true
        }
    }

    function validateAge(){
        if(age.value<=0 || age.value === "" || age.value>100){
            age.style.border = "solid 2px red"
            document.getElementById("ageError").innerHTML = "Please enter your age"
            return false
        }else{
            document.getElementById("ageError").innerHTML = ""
            age.style.border = ""
            return true
        }
    }

    function validateBldg(){
        if(bldgNum.value === "" || bldgNum.value.length<1){
            document.getElementById("bldgError").innerHTML = "Please enter a building number"
            bldgNum.style.border = "solid 2px red"
            return false
        }else{
            bldgNum.style.border = ""
            document.getElementById("bldgError").innerHTML = ""
            return true
        }
    }

    function validateStreet(){
        if(streetName.value === "" || streetName.value.length<3){
            document.getElementById("streetError").innerHTML = "Please enter a street name"
            streetName.style.border = "solid 2px red"
            return false
        }else{
            fName.style.border = ""
            streetName.getElementById("streetError").innerHTML = ""
            return true
        }
    }

    if(validateName() && validateUsername() && validatePassword() && validateEmail() && validatePhone() && validateDOB() && validateAge() && validateBldg() && validateStreet()){
        return true
    }
    else{
        return false
    }
}

function validateContact(){
    const name = document.getElementById("customerName")
    const msg = document.getElementById("customerMsg")
    const email = document.getElementById("customerEmail")

    function validateName(){
        if(name.value === "" || name.value.length<3){
            document.getElementById("contactName").innerHTML = "Please enter a valid name"
            name.style.border = "solid 2px red"
            return false
        }else{
            name.style.border = ""
            document.getElementById("contactName").innerHTML = ""
            return true
        }
    }

    function validateMsg(){
        if(msg.value === ""){
            document.getElementById("contactMsg").innerHTML = "Please enter a message"
            msg.style.border = "solid 2px red"
            return false
        }else{
            msg.style.border = ""
            document.getElementById("contactMsg").innerHTML = ""
            return true
        }
    }

    function validateEmail(){
        if(email.value === ""){
            document.getElementById("contactEmail").innerHTML = "Please enter a valid email e.g (xyz@mail.com)"
            email.style.border = "solid 2px red"
            return false
        }else{
            email.style.border = ""
            document.getElementById("contactEmail").innerHTML = ""
            return true
        }
    }

    if(validateName() && validateMsg() && validateEmail()){
        return true
    }
    else{
        return false
    }
    
}
