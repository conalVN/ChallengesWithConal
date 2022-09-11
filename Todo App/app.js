const input = document.querySelector(".input-control");
const btnAdd = document.querySelector(".add");
const list = document.querySelector(".list");
// add item
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    renderItem();
    input.value = "";
  } else {
    alert("please enter task!");
  }
});
function renderItem() {
  const html = `
    <div class="item">
        <p class="text">${input.value}</p>
        <i class='bx bx-trash delete' ></i>
    </div>`;
  list.innerHTML += html;
}
// remove item
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
