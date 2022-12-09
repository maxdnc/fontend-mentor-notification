// DOM //
const markAsRead = document.getElementById("mark-as-read");
const countNotifications = document.getElementById("count-notifications");
const numberOfNotifications =
  document.getElementsByClassName("whole-notif active");
const notif = document.getElementsByClassName("whole-notif");

// number of notifications //
countNotifications.innerText = numberOfNotifications.length;

// if click on button clearn all the notif //

markAsRead.addEventListener("click", () => {
  if (numberOfNotifications.length == 0) {
    markUnread();
    markAsRead.innerText = "Mark all as read";
  } else if (numberOfNotifications.length !== 0) {
    markAsRead.innerText = "Mark all as unread";
    Array.from(notif).forEach((element) => {
      element.classList.remove("active");
    });
    countNotifications.innerText = numberOfNotifications.length;
  }
});

// if click on a notif mark this notif as read //

Array.from(notif).forEach((element) => {
  element.addEventListener("click", () => {
    if (numberOfNotifications.length == 0) {
      markAsRead.innerText = "Mark all as unread";
    } else if (numberOfNotifications.length !== 0) {
      element.classList.remove("active");
      countNotifications.innerText = numberOfNotifications.length;
    }
  });
});

// change button and function of it mark all as unread //
function markUnread() {
  markAsRead.innerText = "Mark all as unread";
  Array.from(notif).forEach((e) => {
    e.classList.add("active");
  });
  countNotifications.innerText = numberOfNotifications.length;
}

// test //
function global() {
  if (numberOfNotifications.length == 0) {
    markAsRead.innerText = "Mark all as unread";
  } else {
    markAsRead.innerText = "Mark all as read";
  }
}

global();

console.log(global());
