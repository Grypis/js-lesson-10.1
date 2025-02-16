//! =======================================================
/* const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector(".js-alert");

setTimeout(() => {
  showNotification();
  timeoutId = setTimeout(hideNotification, 5000);
}, NOTIFICATION_DELAY);

notification.addEventListener("click", () => {
  hideNotification();
  clearTimeout(timeoutId);
});

function showNotification() {
  notification.classList.add("is-visible");
}

function hideNotification() {
  notification.classList.remove("is-visible");
} */

//! =======================================================
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector(".js-alert");
let counter = 0;

const intervalId = setInterval(() => {
  showNotification();
  timeoutId = setTimeout(hideNotification, 2000);

  if (counter >= 5) {
    clearInterval(intervalId);
  }
}, 4000);

notification.children[0].addEventListener("click", () => {
  hideNotification();
  clearTimeout(timeoutId);
});

notification.children[1].addEventListener("click", () => {
  hideNotification();
  clearInterval(intervalId);
});
//! =======================================================
function showNotification() {
  notification.classList.add("is-visible");
}

function hideNotification() {
  notification.classList.remove("is-visible");
}
