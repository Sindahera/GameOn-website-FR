function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.getElementById('form')
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground-confirmation");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementById('close');
const submitBtn = document.getElementById('btnSubmit');
const confirmationBtn = document.getElementById('btnConfirmation')


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

 

// njye Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
  document.getElementById(elemId).classList.add('errormsg');
}

// validation - when clicking submit button run all functions to check form filled in

function validate(){

  //DOM elements for validation
  const firstName = document.reserve.first.value.trim;
  const lastName = document.reserve.last.value.trim;
  const location = document.reserve.location.value;
  const email = document.reserve.email.value.trim;
  const birthDate = document.reserve.birthdate.value;
  const tournament = document.reserve.quantity.value;
  const terms = document.getElementById('checkbox1');
  
  // defining error variables with a default value
  var firstNameErr = lastNameErr = emailErr = birthDateErr  = tournamentErr = locErr = termsErr = true;
  
  //validating first name with minimum of 2 characters
  
  if (firstName.length < 2) {
    printError("firstNameError", "Veuillez saisir au moins 2 caractères pour votre prénom")
  } else {
  // added a validation to make sure only alpahbetical characters are used by using a regular expression
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(firstName) === false) {
        printError("firstNameError", "Merci d'entrer un nom valide");
    } else {
        printError("firstNameError", "");
        firstNameErr = false;
    }
  }
  
  //validating surname with minimum of 2 characters
  
  if (lastName.length < 2) {
    printError("lastNameError", "Veuillez saisir au moins 2 caractères pour votre nom de famille")
  } else {
  // added a validation to make sure only alpahbetical characters are used by using a regular expression
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(lastName) === false) {
        printError("lastNameError", "Merci d'entrer un nom valide");
    } else {
        printError("lastNameError", "");
        lastNameErr = false;
    }
  }
  
  //validating email
  
  if (email == "") {
    printError("emailError", "Veuillez saisir votre e-mail")
  } else {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email) == false){
      printError("emailError", "S'il vous plaît, mettez une adresse email valide")
    } else {
        printError("emailError", "");
        emailErr = false;
    }
  }
  //validating date of birth
  
  
if (birthDate == "") {
  printError("birthDateError", "Vous devez entrer votre date de naissance")
} else {
    printError("birthDateError", "");
      birthDateErr = false; 
}

//validating to make sure tournament number is entered 

  if (tournament == "") {
    printError("tournamentError", "Veuillez saisir le nombre de tournois auxquels vous avez participé")
  } else {
    //validating to make sure tournament number isn't less than 0
    if (tournament < 0) {
      printError("tournamentError", "Le nombre minimum de tournois autorisés est 0")
    } else {
        printError("tournamentError", "");
        tournamentErr = false;
        }
      }

// validating location has been selected
if (location == "") {
  printError("locError", "Veuillez sélectionner 1 option");
} else {
  printError("locError", "");
  locErr = false;
}

// validating terms and conditions has been selected

if (!terms.checked) {
    printError("termsError", "Vous devez cocher pour accepter les termes et conditions.");
  } else {
    printError("termsError", "");
    termsErr = false;
  };

//prevent form from being submitted if any error

  if (firstNameErr || lastNameErr || emailErr || birthDateErr || tournamentErr || locErr || termsErr  == true) {
    return false;
  } 
  else {
    return true;
  }
}

//Adding event listener to make confirmation screen appear
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    modalbg.style.display = "none";
    modalbg2.style.display = "block";
  });

  //Adding event listener to make confirrmation screen close
  confirmationBtn.addEventListener('click', () => {
    modalbg2.style.display = "none";
    form.submit();
  })

// onclick function for radio buttons to remove error message when selected

function resetMsg() {
  printError("locError", "");
}

//close form

closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
})
