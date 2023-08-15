// JavaScript to handle interactions
document.addEventListener("DOMContentLoaded", function () {
	var profilePictureContainer = document.getElementById("image-container");
	var profilePicture = document.getElementById("preview");
	var fileInput = document.getElementById("profileImages");
	var chooseFileLabel = document.getElementById("choose-file-label");

	// When the profile picture container is clicked, trigger the file input
	profilePictureContainer.addEventListener("click", function () {
		fileInput.click();
	});

	// When the label is clicked, trigger the file input
	chooseFileLabel.addEventListener("click", function (e) {
		e.stopPropagation(); // Prevent the click event from reaching the container
		fileInput.click();
	});

	// When a file is selected, display the chosen profile picture
	fileInput.addEventListener("change", function () {
		var file = fileInput.files[0];
		if (file) {
			var reader = new FileReader();
			reader.onload = function (e) {
				profilePicture.src = e.target.result;
				profilePicture.classList.remove("hidden");
			chooseFileLabel.classList.add("hidden");
			};
			reader.readAsDataURL(file);
		}
	});
});




// function validateForm() {
//             var valid = true;

//             // Perform validation for each field
//             valid = valid && validateField('firstName');
//             valid = valid && validateField('lastName');
//             valid = valid && validateField('email');
//             valid = valid && validateField('password');
//             valid = valid && validateField('confirmPassword');
//             valid = valid && validateField('age');
//             valid = valid && validateField('agree');

//             return valid;
//         }

// function validateField(fieldId) {
//     var value = document.forms["registrationForm"][fieldId].value;
//     var errorElement = document.getElementById(fieldId + "Error");
//     var inputElement = document.getElementById(fieldId);

//     var namePattern = /^[a-zA-Z]+$/;
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     var nationalIdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{11,}$/;
//     var agePattern = /^[1-9][0-9]*$/;

//     // Reset error styles
//     errorElement.classList.remove("active");
//     inputElement.classList.remove("error-field");

//     var errorMessage = "";

//     switch (fieldId) {
// 	case 'firstName':
// 	    if (!namePattern.test(value)) {
// 		errorMessage = "First name is required";
// 	    }
// 	    break;
// 	case 'lastName':
// 	    if (!namePattern.test(value)) {
// 		errorMessage = "Last name is required";
// 	    }
// 	    break;
// 	case 'email':
// 	    if (!emailPattern.test(value)) {
// 		errorMessage = "Invalid email address";
// 	    }
// 	    break;
// 	case 'password':
// 	    if (!nationalIdPattern.test(value)) {
// 		errorMessage = "Password must be at least 8 characters long";
// 	    }
// 	    break;
// 	case 'confirmPassword':
// 	    var password = document.forms["registrationForm"]["password"].value;
// 	    if (value !== password) {
// 		errorMessage = "Passwords do not match";
// 	    }
// 	    break;
// 	case 'age':
// 	    if (!agePattern.test(value)) {
// 		errorMessage = "Age must be a positive integer";
// 	    }
// 	    break;
// 	case 'agree':
// 	    if (!document.forms["registrationForm"]["agree"].checked) {
// 		errorMessage = "You must agree to the terms and conditions";
// 	    }
// 	    break;
//     }

//     if (errorMessage) {
// 	errorElement.innerHTML = errorMessage;
// 	errorElement.classList.add("active");
// 	inputElement.classList.add("error-field");
// 	return false;
//     } else {
// 	return true;
//     }
// }
function validateForm() {
            var valid = true;

            // Perform validation for each field
            valid = valid && validateField('firstName');
            valid = valid && validateField('lastName');
            valid = valid && validateField('email');
            valid = valid && validateField('password');
            valid = valid && validateField('confirmPassword');
            valid = valid && validateField('age');
            valid = valid && validateField('agree');

            return valid;
        }

        function validateField(fieldId) {
            var value = document.forms["registrationForm"][fieldId].value;
            var errorElement = document.getElementById(fieldId + "Error");
            var inputElement = document.getElementById(fieldId);

            var namePattern = /^[a-zA-Z]+$/;
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            var agePattern = /^\d+$/;

            // Reset error styles
            errorElement.classList.remove("active");

            var errorMessage = "";
            var hasError = false;

            switch (fieldId) {
                case 'firstName':
                    if (!namePattern.test(value)) {
                        errorMessage = "First name is required";
                        hasError = true;
                    }
                    break;
                case 'lastName':
                    if (!namePattern.test(value)) {
                        errorMessage = "Last name is required";
                        hasError = true;
                    }
                    break;
                case 'email':
                    if (!emailPattern.test(value)) {
                        errorMessage = "Invalid email address";
                        hasError = true;
                    }
                    break;
                case 'password':
                    if (!passwordPattern.test(value)) {
                        errorMessage = "Password must be at least 8 characters long";
                        hasError = true;
                    }
                    break;
                case 'confirmPassword':
                    var password = document.forms["registrationForm"]["password"].value;
                    if (value !== password) {
                        errorMessage = "Passwords do not match";
                        hasError = true;
                    }
                    break;
                case 'age':
                    if (!agePattern.test(value) || value < 13 || value > 120) {
                        errorMessage = "Age must be between 13 and 120";
                        hasError = true;
                    }
                    break;
                case 'agree':
                    if (!document.forms["registrationForm"]["agree"].checked) {
                        errorMessage = "You must agree to the terms and conditions";
                        hasError = true;
                    }
                    break;
            }

            if (hasError) {
                errorElement.innerHTML = errorMessage;
                errorElement.classList.add("active");
                inputElement.classList.add("error-field");
                return false;
            } else {
                errorElement.classList.remove("active");
                inputElement.classList.remove("error-field");
                return true;
            }
        }




// function validatePhoneNumber(inputValue) {
//       const phoneNumberRegex = /^[0-9]{11}$/; // Regular expression for exactly 11 digits

//       const validationMessage = document.getElementById("validationMessage");

//       if (!phoneNumberRegex.test(inputValue)) {
//         validationMessage.textContent = "Phone number must be exactly 11 digits.";
//       } else if (!isValidPhoneNumber(inputValue)) {
//         validationMessage.textContent = "Phone number must contain only digits.";
//       } else {
//         validationMessage.textContent = ""; // Clear the validation message
//       }
//     }

//     function isValidPhoneNumber(inputValue) {
//       return /^\d+$/.test(inputValue);
//     }



  function validatePhoneNumber(inputElement) {
      const inputValue = inputElement.value;
      const phoneNumberRegex = /^[0-9]{11}$/; // Regular expression for exactly 11 digits

      const validationMessage = document.getElementById("validationMessage");

      if (!phoneNumberRegex.test(inputValue)) {
        validationMessage.textContent = "Phone number must be exactly 11 digits.";
        inputElement.classList.add("invalid-input"); // Apply the red border
      } else if (!isValidPhoneNumber(inputValue)) {
        validationMessage.textContent = "Phone number must contain only digits.";
        inputElement.classList.add("invalid-input"); // Apply the red border
      } else {
        validationMessage.textContent = ""; // Clear the validation message
        inputElement.classList.remove("invalid-input"); // Remove the red border
      }
    }

    function isValidPhoneNumber(inputValue) {
      return /^\d+$/.test(inputValue);
    }
