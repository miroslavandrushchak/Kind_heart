
// Information about device
console.log(navigator.userAgent);
if (navigator.userAgent.includes("Chrome")) {
  console.log('Browser "Chrome"');
} else if (navigator.userAgent.includes("Firefox")) {
  console.log('Browser "Firefox"');
}
console.log(navigator.platform);

console.log(location.href);

let usersLogin = document.querySelectorAll(".login");
let loginPopupBackground = document.querySelector(".login_popup");
let loginPopupForm = document.querySelector(".login_popup_form");
let closeLoginWindow = document.querySelector(".close_login_window");

usersLogin.forEach((loginButton) => {
  loginButton.addEventListener("click", (login) => {
    loginPopupBackground.classList.add("active_login_form");
    loginPopupForm.classList.add("active_login_form");
  });
});

closeLoginWindow.addEventListener("click", () => {
  loginPopupBackground.classList.remove("active_login_form");
  loginPopupForm.classList.remove("active_login_form");
});

document.addEventListener("click", (login) => {
  if (login.target === loginPopupBackground) {
    loginPopupBackground.classList.remove("active_login_form");
    loginPopupForm.classList.remove("active_login_form");
  }
});

let usersRegistration = document.querySelectorAll(".registration");
let registrationPopupBackground = document.querySelector(".registration_popup");
let registrationPopupForm = document.querySelector(".registration_popup_form");
let closeRegistrationWindow = document.querySelector(".close_registration_window");

usersRegistration.forEach((button) => {
  button.addEventListener("click", (registration) => {
    registrationPopupBackground.classList.add("active_registration_form");
    registrationPopupForm.classList.add("active_registration_form");
  });
});

closeRegistrationWindow.addEventListener("click", () => {
  registrationPopupBackground.classList.remove("active_registration_form");
  registrationPopupForm.classList.remove("active_registration_form");
});

document.addEventListener("click", (registration) => {
  if (registration.target === registrationPopupBackground) {
    registrationPopupBackground.classList.remove("active_registration_form");
    registrationPopupForm.classList.remove("active_registration_form");
  }
});

let chatPopup = document.querySelectorAll(".chat");
let chatPopupBackground = document.querySelector(".chat_popup");
let chatPopupForm = document.querySelector(".chat_popup_form");
let closeChatButton = document.querySelector(".close_chat_window");

chatPopup.forEach((chatButton) => {
  chatButton.addEventListener("click", (chat) => {
    chatPopupBackground.classList.add("active_chat_form");
    chatPopupForm.classList.add("active_chat_form");
  });
});

closeChatButton.addEventListener("click", () => {
  chatPopupBackground.classList.remove("active_chat_form");
  chatPopupForm.classList.remove("active_chat_form");
});

document.addEventListener("click", (chat) => {
  if (chat.target === chatPopupBackground) {
    chatPopupBackground.classList.remove("active_chat_form");
    chatPopupForm.classList.remove("active_chat_form");
  }
});

function progressBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = scroll / height * 100;

  document.getElementById("progress").style.width = scrolled + "%";
}

window.addEventListener("scroll", progressBar);