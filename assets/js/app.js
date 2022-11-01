const date = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

document.querySelector(".date .Month_sel").innerHTML = months[date.getMonth()];

document.querySelector(".date .Year_sel").innerHTML = date.getFullYear();
const monthDays = document.querySelector(".days");

let days = "";

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    days += `<div class= "today">${[i]}</div>`;
  } else {
    days += `<div>${[i]}</div>`;
  }
  monthDays.innerHTML = days;
}
