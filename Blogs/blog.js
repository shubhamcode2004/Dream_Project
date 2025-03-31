/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openPopup(title, subtitle, imageSrc, content) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-sub-title").innerText = subtitle;
  document.getElementById("popup-image").src = imageSrc;
  document.getElementById("popup-content").innerText = content;
  document.getElementById("popup-container").style.display = "flex";
  document.body.classList.add("no-scroll");
  setTimeout(() => {
    document.getElementById("popup").classList.add("show");
  }, 10);
  history.pushState(null, null, location.href);
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
  setTimeout(() => {
    document.getElementById("popup-container").style.display = "none";
    document.body.classList.remove("no-scroll");
  }, 300);
}

window.onpopstate = function () {
  closePopup();
};
