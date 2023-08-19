function logout() {
    let text = "ARE YOU SURE WANT TO LOG OUT ?\nEither OK or Cancel.";
    if (confirm(text) == true) {
        window.location.href = "../index.html";
    } else {
        console.log("You Cancelled");
    }
}