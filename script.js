var form = document.getElementById("registrationForm");

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var gender = document.getElementById("gender");
var email = document.getElementById("email");
var contact = document.getElementById("contact");
var courseName = document.getElementById("courseName");
var studentId = document.getElementById("studentId");
var password = document.getElementById("password");

var btn = form.querySelector('button[type="submit"]');


var nameError = document.getElementById("nameError");
var genderError = document.getElementById("genderError");
var emailError = document.getElementById("emailError");
var contactError = document.getElementById("contactError");
var courseError = document.getElementById("courseError");
var idError = document.getElementById("idError");
var passwordError = document.getElementById("passwordError");

var successMsg = document.getElementById("successMsg");

//Disable Submit initially
btn.disabled = true;


//Validate all fields
function validateForm() {

    var isVaild = true;

    //Clear Previous Messages
    nameError.textContent = "";
    genderError.textContent = "";
    emailError.textContent = "";
    idError.textContent = "";
    courseError.textContent = "";
    successMsg.textContent = "";



    //Validate Fist and Last Name
    if (firstName.value.trim() === "" || lastName.value.trim() === "") {
        nameError.textContent = "Please Enter both First Name and Last Name.";
        isVaild = false;
    }

    //Validate Gender
    if (gender.value === "") {
        genderError.textContent = "Please Select your Gender.";
        isVaild = false;
    }

    //Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required."
        isVaild = false;
    }
    else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please Enter a valid email address.";
        isVaild = false;
    }

    //Validate Contact
    if (contact.value.trim() === "") {
        contactError.textContent = "Contact Number is Required";
        isVaild = false;
    }
    else if (!/^[0-9]{10}$/.test(contact.value)) {
        contactError.textContent =
            "Enter a valid 10-digit contact number.";

        isValid = false;
    }


    //Validate course 
    if (courseName.value === "") {
        courseError.textContent = "Please Select a course";
        isVaild = false;
    }

    //Validate Student ID
    if (studentId.value.trim() === "") {
        idError.textContent = "Student ID is required.";
        isVaild = false;
    }

    //Validate Password
    if (password.value.length < 6) {
        passwordError.textContent = "Password Must contain at least 6 Characters.";
        isVaild = false;
    }

    //Enable or disable Submit button
    btn.disabled = !isVaild;

    return isVaild;


}

//Validate while typing
var inputFields = [firstName, lastName, email, contact, studentId, password];

inputFields.forEach(function (field) {
    field.addEventListener("input", validateForm);

});

// Validate when dropdown values change
gender.addEventListener("change", validateForm);
courseName.addEventListener("change", validateForm);

// Handle form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (validateForm()) {
        successMsg.textContent = "Registration submitted successfully!";

        form.reset();

        // Disable Submit again after resetting
        btn.disabled = true;
    }
});

