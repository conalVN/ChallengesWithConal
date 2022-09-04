const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const list = [
  {
    image:
      "https://i.pinimg.com/236x/41/26/0d/41260d12e7d950bc11999ca8002cddc5.jpg",
    name: "Cappucinno",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/4a/1c/4a/4a1c4a9755e4d3bdfcb45a1c3a58712f.jpg",
    name: "Coffee Foam",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/25/6c/d5/256cd5d6484538b4bc710de34d533044.jpg",
    name: "Iced Coffee",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/5d/a5/6c/5da56cd1e61c2241520ac619edcb92b4.jpg",
    name: "Cold Brew Coffee",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/b6/ba/c5/b6bac5731a9293a745e8d381a77da2a5.jpg",
    name: "Coconut Pandan",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/39/28/db/3928db0bb71d1787714d4cf4671b7ca3.jpg",
    name: "Berry Pound",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/0d/9a/ed/0d9aedcc0f2bf82dead9bf921aace3b6.jpg",
    name: "Orange Cake",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/b7/64/71/b764710ca8bf92385698f97ca2122335.jpg",
    name: "Strawberry Cake",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/d3/f7/4f/d3f74fcc9899a13b2278528a23403ac5.jpg",
    name: "Kiwi",
    price: 10,
    type: "fruit",
  },
  {
    image:
      "https://i.pinimg.com/236x/2e/a5/98/2ea598f82ff085e3190604c5838a049d.jpg",
    name: "Avocado",
    price: 10,
    type: "fruit",
  },
  {
    image:
      "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg",
    name: "Blue Berry",
    price: 10,
    type: "fruit",
  },
  {
    image:
      "https://i.pinimg.com/236x/d1/bd/39/d1bd39686224c8de0f2d16913f9e8cc6.jpg",
    name: "Pomegranate",
    price: 10,
    type: "fruit",
  },
  {
    image:
      "https://i.pinimg.com/236x/41/26/0d/41260d12e7d950bc11999ca8002cddc5.jpg",
    name: "Cappucinno",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/4a/1c/4a/4a1c4a9755e4d3bdfcb45a1c3a58712f.jpg",
    name: "Coffee Foam",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/25/6c/d5/256cd5d6484538b4bc710de34d533044.jpg",
    name: "Iced Coffee",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/5d/a5/6c/5da56cd1e61c2241520ac619edcb92b4.jpg",
    name: "Cold Brew Coffee",
    price: 5,
    type: "coffee",
  },
  {
    image:
      "https://i.pinimg.com/236x/b6/ba/c5/b6bac5731a9293a745e8d381a77da2a5.jpg",
    name: "Coconut Pandan",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/39/28/db/3928db0bb71d1787714d4cf4671b7ca3.jpg",
    name: "Berry Pound",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/0d/9a/ed/0d9aedcc0f2bf82dead9bf921aace3b6.jpg",
    name: "Orange Cake",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/b7/64/71/b764710ca8bf92385698f97ca2122335.jpg",
    name: "Strawberry Cake",
    price: 15,
    type: "cake",
  },
  {
    image:
      "https://i.pinimg.com/236x/d3/f7/4f/d3f74fcc9899a13b2278528a23403ac5.jpg",
    name: "Kiwi",
    price: 10,
    type: "fruit",
  },
  {
    image:
      "https://i.pinimg.com/236x/2e/a5/98/2ea598f82ff085e3190604c5838a049d.jpg",
    name: "Avocado",
    price: 10,
    type: "fruit",
  },
  {
    image:
      "https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg",
    name: "Blue Berry",
    price: 10,
    type: "fruit",
  },
  {
    image:
      "https://i.pinimg.com/236x/d1/bd/39/d1bd39686224c8de0f2d16913f9e8cc6.jpg",
    name: "Pomegranate",
    price: 10,
    type: "fruit",
  },
];

const html = list.map((item) => {
  return `
    <div class="item" data-type="${item.type}">
        <div class="item-img" style="background-image: url(${item.image})"></div>
        <div class="item-desc">
            <p class="item-name">${item.name}</p>
            <p class="item-price">${item.price}$</p>
        </div>
    </div>
    `;
});
$(".product").innerHTML = html.join("");

$$(".item").forEach((el) => {
  let value = el.attributes[1].nodeValue;
  $$(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent.toLowerCase() !== value) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
      if (btn.textContent.toLowerCase() == "all") {
        el.style.display = "block";
      }
    });
  });
});
