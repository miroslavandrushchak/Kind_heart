
// Information about device
console.log(navigator.userAgent);
if (navigator.userAgent.includes("Chrome")) {
  console.log('Browser "Chrome"');
} else if (navigator.userAgent.includes("Firefox")) {
  console.log('Browser "Firefox"');
}
console.log(navigator.platform);

console.log(location.href);

//Preloader
// window.onload = function () {
//   let preloader = document.getElementById("preloader");
//   preloader.classList.add("preloaders_hider");
//   setInterval(function () {
//     preloader.classList.add("preloader_hidden");
//   }, 1490);
// };

//Login popup window
let users_login = document.querySelectorAll(".login");
let login_popup_background = document.querySelector(".login_popup");
let login_popup_form = document.querySelector(".login_popup_form");
let close_login_window = document.querySelector(".close_login_window");

users_login.forEach((login_button) => {
  login_button.addEventListener("click", (e) => {
    login_popup_background.classList.add("active_login_form");
    login_popup_form.classList.add("active_login_form");
  });
});

close_login_window.addEventListener("click", () => {
  login_popup_background.classList.remove("active_login_form");
  login_popup_form.classList.remove("active_login_form");
});

document.addEventListener("click", (e) => {
  if (e.target === login_popup_background) {
    login_popup_background.classList.remove("active_login_form");
    login_popup_form.classList.remove("active_login_form");
  }
});

//Registration popup window
let users_registration = document.querySelectorAll(".registration");
let registration_popup_background = document.querySelector(
  ".registration_popup"
);
let registration_popup_form = document.querySelector(
  ".registration_popup_form"
);
let close_registration_window = document.querySelector(
  ".close_registration_window"
);

users_registration.forEach((button) => {
  button.addEventListener("click", (registration) => {
    registration_popup_background.classList.add("active_registration_form");
    registration_popup_form.classList.add("active_registration_form");
  });
});

close_registration_window.addEventListener("click", (registration) => {
  registration_popup_background.classList.remove("active_registration_form");
  registration_popup_form.classList.remove("active_registration_form");
});

document.addEventListener("click", (registration) => {
  if (registration.target === registration_popup_background) {
    registration_popup_background.classList.remove("active_registration_form");
    registration_popup_form.classList.remove("active_registration_form");
  }
});

// Проба реалізації виведення введених даних з форми реєстрації
// let new_data_input = document.querySelectorAll(".input");
// let new_users_contact = document.getElementsByName("new_users_contact");
// let new_users_login = document.getElementsByName("new_users_login");
// let new_users_password = document.getElementsByName("new_users_password");
// let new_data_submit = document.querySelector(".new_data_submit");

// registration_popup_form.addEventListener("submit", (registration_submit) => {
//   if (registration_submit.target === new_data_submit) {
//     window.alert(new_users_contact);
//   }
// });

// Chat popup window
let chat_popup = document.querySelectorAll(".chat");
let chat_popup_background = document.querySelector(".chat_popup");
let chat_popup_form = document.querySelector(".chat_popup_form");
let close_chat_button = document.querySelector(".close_chat_window");

chat_popup.forEach((chat_button) => {
  chat_button.addEventListener("click", (chat) => {
    chat_popup_background.classList.add("active_chat_form");
    chat_popup_form.classList.add("active_chat_form");
  });
});

close_chat_button.addEventListener("click", () => {
  chat_popup_background.classList.remove("active_chat_form");
  chat_popup_form.classList.remove("active_chat_form");
});

document.addEventListener("click", (chat) => {
  if (chat.target === chat_popup_background) {
    chat_popup_background.classList.remove("active_chat_form");
    chat_popup_form.classList.remove("active_chat_form");
  }
});

// Проба реалізації виведення введених даних з форми чату
// let message_submit = document.querySelector(".message_submit");
// let label_of_message = document.getElementsByName("message");
// message_submit.addEventListener("submit", (message_submission) => {
//   if (message_submission.target === message_submit) {
//     alert(label_of_message);
//   }
// });

// Лінія прокрутки
function progress_bar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = scroll / height * 101;

  document.getElementById("progress").style.width = scrolled + "%";
}

window.addEventListener("scroll", progress_bar);