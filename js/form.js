
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




function validateForm() {
            var valid = true;

            // Perform validation for each field
            valid = valid && validateField('firstName');
            valid = valid && validateField('lastName');
            valid = valid && validateField('email');
            valid = valid && validateField('age');

            return valid;
        }

function validateField(fieldId) {
    var value = document.forms["registrationForm"][fieldId].value;
    var errorElement = document.getElementById(fieldId + "Error");
    var inputElement = document.getElementById(fieldId);

    var namePattern = /^[a-zA-Z]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var agePattern = /^[1-9][0-9]*$/;

    // Reset error styles
    errorElement.classList.remove("active");
    inputElement.classList.remove("error-field");

    var errorMessage = "";

    switch (fieldId) {
	case 'firstName':
	    if (!namePattern.test(value)) {
		errorMessage = "First name is required";
	    }
	    break;
	case 'lastName':
	    if (!namePattern.test(value)) {
		errorMessage = "Last name is required";
	    }
	    break;
	case 'email':
	    if (!emailPattern.test(value)) {
		errorMessage = "Invalid email address";
	    }
	    break;
	case 'age':
	    if (!agePattern.test(value)) {
		errorMessage = "Age must be a positive integer";
	    }
	    break;
    }

    if (errorMessage) {
	errorElement.innerHTML = errorMessage;
	errorElement.classList.add("active");
	inputElement.classList.add("error-field");
	return false;
    } else {
	return true;
    }
}

