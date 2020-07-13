let name = "gutCookie";
let value = "rememberVisitor";
let days = 365;
let cookieExists = doesCookieExist(name);

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function doesCookieExist(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function closeBannerSetCookie() {
  document.getElementById("cookie-banner").style.display = "none";
  createCookie(name, value, days);
}

// display banner but delete it and set cookie on closing click
if (!cookieExists) {
  document.getElementById("cookie-banner").style.display="grid";
  document.getElementById("close").addEventListener("click", closeBannerSetCookie);
}
