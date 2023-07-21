const butInstall = document.getElementById("buttonInstall");
let installEvent;
// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";
  installEvent = event;
});

butInstall.addEventListener("click", async () => {
  installEvent.prompt();
});

window.addEventListener("appinstalled", (event) => {
  butInstall.setAttribute("disabled", true);
  butInstall.textContent = "Installed!";
});
