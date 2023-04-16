var emailArray = ['user'];
var passwordArray = ['user'];

// var emailArrayAdmin = ['shubhamvarma2004@gmail.com'];
// var passwordArrayAdmin = ['Shubham@1985'];

var loginBox = document.getElementById("login");

function loginTabFun() {
    event.preventDefault();

    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";
    forgetBox.style.visibility = "hidden";

    loginTab.style.backgroundColor = "rgb(12, 132, 189)";
    regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
}

function login() {
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        return;
    } else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        return;
    } else {
        alert(email + " You Logged In User Panel Successfully");
        // window.history.replaceState('../Clients/user.html');
        location.assign('../Clients/user.html')
        location.replace('../Clients/user.html')
        // window.history.replaceState(nextState, nextTitle, nextURL);
        // window.history.pushState(nextState, nextTitle, nextURL);
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        return;
    }
}

// Current URL: https://my-website.com/page_a
const nextURL = '../Clients/user.html';
const nextTitle = 'User Panel';
const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading

// This will replace the current entry in the browser's history, without reloading

// function login() {
//     event.preventDefault();

//     var email = document.getElementById("se").value;
//     var password = document.getElementById("sp").value;

//     var i = emailArrayAdmin.indexOf(email);

//     if (emailArrayAdmin.indexOf(email) == -1) {
//         if (email == "shubhamvara2004@gmail.com") {
//             alert("Email required.");
//             return;
//         }
//         alert("Email does not exist.");
//         return;
//     } else if (passwordArrayAdmin[i] != password) {
//         if (password == "Shubham@1985") {
//             alert("Password required.");
//             return;
//         }
//         alert("Password does not match.");
//         return;
//     } else {
//         alert(email + " You Logged In Admin Panel Successfully");
//         location.href = '../Clients/admin.html';
//         document.getElementById("se").value = "";
//         document.getElementById("sp").value = "";
//         return;
//     }
// }