const rocket = document.getElementById("rocket");

function start() {
  rocket.style.marginTop = "-2000px";
  rocket.style.transition = "all 2s ease-in-out";
}

function down() {
  rocket.style.marginTop = "0";
  rocket.style.transition = "all 2s ease-in-out";
}
