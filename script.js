var form = document.getElementById("registrationForm");

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var gender = document.getElementById("gender");
var email = document.getElementById("email");
var studentId = document.getElementById("studentId");
var courseName = document.getElementById("courseName");

var nameError = document.getElementById("nameError");
var genderError = document.getElementById("genderError");
var emailError = document.getElementById("emailError");
var idError = document.getElementById("idError");
var courseError = document.getElementById("courseError");

var successMsg = document.getElementById("successMsg");


//Validate when the form is submitted
form.addEventListener("submit",function(event){
    
    //Prevent Page Refresh
    event.preventDefault();

    //Clear Previous Messages
    nameError.textContent = "";
    genderError.textContent = "";
    emailError.textContent = "";
    idError.textContent = "";
    courseError.textContent = "";
    successMsg.textContent = "";

    var isVaild = true;

    //Validate Fist and Last Name
    if(firstName.value.trim() === "" || lastName.value.trim() === ""){
        nameError.textContent = "Please Enter both First Name and Last Name.";
        isVaild = false;
    }

    //Validate Gender
    if(gender.value === ""){
        genderError.textContent = "Please Select your Gender.";
        isVaild = false;
    }

    //Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        emailError.textContent =  "Email is required."
        isVaild = false;
    }
    else if(!emailPattern.test(email.value.trim())){
         emailError.textContent =  "Please Enter a valid email address.";
         isVaild = false;
    }


    //Validate Student ID
    if(studentId.value.trim() === ""){
        idError.textContent =  "Student ID is required.";
        isVaild = false;
    }

    //Validate course 
    if(courseName.value === ""){
        courseError.textContent = "Please Select a course"; 
        isVaild = false;
    }

    //Display Result
    if(isVaild){
        successMsg.textContent = "Registration submitted successfully!";

        form.reset();
    }

});