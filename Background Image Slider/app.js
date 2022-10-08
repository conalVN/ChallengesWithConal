const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const list = [
  {
    image: "./images/img.jpg",
    title: "Anime name ?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus corporis corrupti sequi",
  },
  {
    image: "./images/img1.jpg",
    title: "Anime name ?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus corporis corrupti sequi",
  },
  {
    image: "./images/img2.jpg",
    title: "Anime name ?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus corporis corrupti sequi",
  },
  {
    image: "./images/img3.jpg",
    title: "Anime name ?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus corporis corrupti sequi",
  },
];

function render(i) {
  $(".root").innerHTML = list
    .map((page, index) => {
      if (index == i) {
        $$(".circle")[i].classList.add("active");
        return `
        <div class='content' style='background-image: url(${page.image})'>
          <div class='box'>
            <h2>${page.title}</h2>
            <p>${page.desc}</p>
          </div>
        </div>
      `;
      }
    })
    .join("");
}
render(0);

$$(".circle").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    $$(".circle").forEach((item) => item.classList.remove("active"));
    dot.classList.add("active");
    render(index);
  });
});
