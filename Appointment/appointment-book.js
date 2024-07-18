/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

timeLeft = 10;

function countdown() {
  timeLeft--;
  document.getElementById("seconds").innerHTML = String(timeLeft);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  }
}

setTimeout(countdown, 1000);

function sendMailOffline() {
  var params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    location: document.getElementById("location").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "email_1985";
  const templateID = "email_template_booking";

  if (
    (document.getElementById("phone").value !== "",
    document.getElementById("email").value !== "",
    document.getElementById("date").value !== "",
    document.getElementById("location").value !== "")
  ) {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        document.getElementById("location").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Appointment Booked Successfully!!");
        window.location.replace(
          "https://shubhamslidingwindow.in/Appointment/appointment-success.html"
        );
      })
      .catch((err) => {
        alert("Incorrect Details Filled");
      });
  } else {
    alert("Please make sure to complete all the mandatory details.");
  }
}

// ************************************************************

function sendMailOnline() {
  var params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    location: document.getElementById("location").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "email_1985";
  const templateID = "email_template_booking";

  if (
    (document.getElementById("phone").value !== "",
    document.getElementById("email").value !== "",
    document.getElementById("date").value !== "",
    document.getElementById("location").value !== "")
  ) {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        document.getElementById("location").value = "";
        document.getElementById("message").value = "";
        console.log(res);
      })
      .catch((err) => {
        alert("Incorrect Details Filled");
      });
  } else {
    alert("Please make sure to complete all the mandatory details.");
  }
}
