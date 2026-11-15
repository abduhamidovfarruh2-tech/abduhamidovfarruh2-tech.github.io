// Light/dark mode switch; remembers the choice when the browser allows it
var root = document.documentElement;
var btn = document.getElementById("theme-toggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  btn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

var saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

btn.addEventListener("click", function () {
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});
