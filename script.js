function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
class TxtType {
  constructor(t, e, s) {
    (this.toRotate = e),
      (this.el = t),
      (this.loopNum = 0),
      (this.period = parseInt(s, 10) || 2e3),
      (this.txt = ""),
      this.tick(),
      (this.isDeleting = !1);
  }
  tick() {
    var t = this.loopNum % this.toRotate.length,
      e = this.toRotate[t];
    this.isDeleting
      ? (this.txt = e.substring(0, this.txt.length - 1))
      : (this.txt = e.substring(0, this.txt.length + 1)),
      (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>");
    var s = this,
      i = 200 - 100 * Math.random();
    this.isDeleting && (i /= 2),
      this.isDeleting || this.txt !== e
        ? this.isDeleting &&
          "" === this.txt &&
          ((this.isDeleting = !1), this.loopNum++, (i = 500))
        : ((i = this.period), (this.isDeleting = !0)),
      setTimeout(function () {
        s.tick();
      }, i);
  }
}
function ajax(t, e, s, i, n) {
  var a = new XMLHttpRequest();
  a.open(t, e),
    a.setRequestHeader("Accept", "application/json"),
    (a.onreadystatechange = function () {
      a.readyState === XMLHttpRequest.DONE &&
        (200 === a.status
          ? i(a.response, a.responseType)
          : n(a.status, a.response, a.responseType));
    }),
    a.send(s);
}
(window.onload = function () {
  for (
    var t = document.getElementsByClassName("typewrite"), e = 0;
    e < t.length;
    e++
  ) {
    var s = t[e].getAttribute("data-type"),
      i = t[e].getAttribute("data-period");
    s && new TxtType(t[e], JSON.parse(s), i);
  }
  var n = document.createElement("style");
  (n.type = "text/css"),
    (n.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}"),
    document.body.appendChild(n);
}),
  window.addEventListener("DOMContentLoaded", function () {
    var t = document.getElementById("my-form");
    function e() {
      t.reset(), alert("Submitted Sucessfully !");
    }
    function s() {
      alert("OOPS ! There was some Problem");
    }
    document.getElementById("status"),
      t.addEventListener("submit", function (i) {
        i.preventDefault();
        var n = new FormData(t);
        ajax(t.method, t.action, n, e, s);
      });
  });
