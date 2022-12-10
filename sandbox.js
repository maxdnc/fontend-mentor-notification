// DOM //
const markAsRead = document.getElementById("mark-as-read");
const countNotifications = document.getElementById("count-notifications");
const numberOfNotifications =
  document.getElementsByClassName("whole-notif active");

const notif = document.getElementsByClassName("whole-notif");
let count = numberOfNotifications.length;
const button = document.querySelectorAll(".red-dot");

// number of notifications //

function updateDisplayed() {
  let count = numberOfNotifications.length;
  if (count > 0) {
    markAsRead.innerText = "Mark all as read";
  } else {
    markAsRead.innerText = "Mark all as unread";
  }
  countNotifications.innerText = count;
}

// clean all //

function markAllAsRead() {
  const numberOfNotifications = document.querySelectorAll(".active");
  const notif = document.querySelectorAll(".whole-notif");
  let count = numberOfNotifications.length;

  if (count > 0) {
    numberOfNotifications.forEach((item) => {
      item.classList.remove("active");
    });
    updateDisplayed();
  } else {
    notif.forEach((item) => {
      item.classList.add("active");
    });
  }
  updateDisplayed();
}

updateDisplayed();
if (count > 0) {
  markAsRead.addEventListener("click", () => {
    markAllAsRead();
    updateDisplayed();
  });

  Array.from(notif).forEach((element) => {
    button.forEach((event) => {
      element.addEventListener("click", () => {
        element.classList.remove("active");
        updateDisplayed();
      });
    });
  });
}
