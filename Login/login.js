var emailArray = ['user'];
var passwordArray = ['user'];
var loginBox = document.getElementById("login");

function login() {
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var admin_email = 'shubhamvarma2004@gmail.com'
    var admin_pass = 'ABCDEFGH12345678'

    var i = emailArray.indexOf(email);
    if (email == admin_email) {
        if (email == admin_email) {
            if (password == admin_pass) {
                alert("You Logged into Admin Panel Sucessfully");
                location.assign('../Clients/admin.html')
                location.replace('../Clients/admin.html')
            }
            else {
                alert("E-mail OR Password does not Match.");
                return;
            }
        }
        else {
            alert("E-mail OR Password does not match.");
            return;
        }
    } else if (emailArray.indexOf(email) == -1) {
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
        location.assign('../Clients/user.html')
        location.replace('../Clients/user.html')
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        return;
    }
}