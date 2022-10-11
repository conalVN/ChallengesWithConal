const day = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  icons = document.querySelectorAll(".icons span");

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

//   get new date
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const render = () => {
  let li = "";
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(),
    firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();

  for (let i = firstDayofMonth; i > 0; i--) {
    li += `<li class={inactive}>${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i < lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    li += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i <= 6; i++) {
    li += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  day.innerHTML = li;
};
render();

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
      return;
    }
    date = new Date();
    render();
  });
});
