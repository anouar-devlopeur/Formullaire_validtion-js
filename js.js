var dataArray = [];

function affiche(event) {
  event.preventDefault()
  var email = document.getElementById("email").value;
  var phone = document.getElementById("Phone").value;
  var date = document.getElementById("date").value;
  var msg = document.getElementById("msg").value;
  var affErrEmail = document.getElementById("sp-email");
  var affErrPhone = document.getElementById("sp-Phone");
  var affErrdate = document.getElementById("sp-date");
  var affMsg = document.getElementById("sp-msg");

  var cop = 0;
  var regxEmail = /^[A-Za-z0-9_.]+@([a-z]+\.)+[a-z]{2,3}$/;
  var regexPhone = /^\+212[0-9]{9}$/;

  // Email validation
  if (email == "") {
    affErrEmail.innerHTML = "Please fill in this field.";
    cop++;
  } else if (!regxEmail.test(email)) {
    affErrEmail.innerHTML = "Invalid email address.";
    cop++;
  } else {
    affErrEmail.innerHTML = "";
  }

  // Phone validation
  if (phone == "") {
    affErrPhone.innerHTML = "Please fill in this field.";
    cop++;
  } else if (!regexPhone.test(phone)) {
    affErrPhone.innerHTML = "Invalid phone number. It should start with '+212' and have 9 digits.";
    cop++;
  } else {
    affErrPhone.innerHTML = "";
  }

  // Date validation
  if (date == "") {
    affErrdate.innerHTML = "Date is required. Please enter a valid date.";
    cop++;
  } else {
    var selectedDate = new Date(date);
    var year = selectedDate.getFullYear();

    if (year < 2000 || year > 2024) {
      affErrdate.innerHTML = "Date should be between 2000 and 2024.";
      cop++;
    } else {
      affErrdate.innerHTML = "";
    }
  }

  // Message validation
  var regexMsg = /^[A-Za-z]+$/;
  if (msg == "") {
    affMsg.innerHTML = "Please fill in this field.";
    cop++;
  } else if (!regexMsg.test(msg)) {
    affMsg.innerHTML = "Message should only contain letters.";
    cop++;
  } else {
    affMsg.innerHTML = "";
  }

  // Add to the dataArray
  if (cop != 0) {
    console.log("Please fix the errors before submitting.");
  } else {
    dataArray.push({
      email: email,
      phone: phone,
      date: date,
      message: msg,
    });
    displayData();
    document.getElementById("myform").reset();
  }

  // Reset the form
//  document.getElementById("myform").reset();
  //  event.preventDefault()
}

var displayedDataDiv = document.getElementById("aff");

function displayData() {
  displayedDataDiv.innerHTML = ""; // Clear previous data display

  for (var i = 0; i < dataArray.length; i++) {
    var e = dataArray[i];
    var dataString =
      "Email: " + e.email + "<br>" +
      "Phone: " + e.phone + "<br>" +
      "Date: " + e.date + "<br>" +
      "Message: " + e.message + "<br><br>";

    displayedDataDiv.innerHTML += dataString;
  }
}