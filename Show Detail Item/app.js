const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const list = [
  {
    name: "Dép quai hậu",
    image: "https://cf.shopee.vn/file/69c64f8175ffa06413c918d22e316f65",
    desc: `
         Giày Sandal Biti's Hunter với kiểu dáng đơn giản nhưng thời trang, mang lại sự thoải mái và tự tin cho bạn suốt ngày dài. 
         Quai Si, đế Eva Phun (Injection Phylon) cao cấp, bền chắc, mang lại nhẹ nhàng, êm ái cho bàn chân.
         Đặc biệt thiết kế quai năng động, viền chỉ chắc chắn ôm gọn chân nhưng lại cực kì thông thoáng, không gây nóng bức, hầm hay khó chịu.
         Giày với thiết kế khỏe khoắn, phù hợp để dùng đi chơi, đi bộ hoặc dạo biển.
         Phần đế được kết hợp rãnh chống trơn trượt, có tính ma sát cao nên hỗ trợ tránh bị trơn trượt, té ngã khi di chuyển.`,
  },
  {
    name: "Giầy Bitis Hunter",
    image: "https://cf.shopee.vn/file/4270d72c23a551029a7f08e9b39a6aec",
    desc: `
         Giày Sandal Biti's Hunter với kiểu dáng đơn giản nhưng thời trang, mang lại sự thoải mái và tự tin cho bạn suốt ngày dài. 
         Quai Si, đế Eva Phun (Injection Phylon) cao cấp, bền chắc, mang lại nhẹ nhàng, êm ái cho bàn chân.
         Đặc biệt thiết kế quai năng động, viền chỉ chắc chắn ôm gọn chân nhưng lại cực kì thông thoáng, không gây nóng bức, hầm hay khó chịu.
         Giày với thiết kế khỏe khoắn, phù hợp để dùng đi chơi, đi bộ hoặc dạo biển.
         Phần đế được kết hợp rãnh chống trơn trượt, có tính ma sát cao nên hỗ trợ tránh bị trơn trượt, té ngã khi di chuyển.`,
  },
];

// render item
const html = list.map((item, index) => {
  return `
    <div class="item" data-index="${index}">
        <div class="item-image">
            <img class="image" src="${item.image}" />
        </div>
        <div class='item-body'>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
        </div>
        <button class="btn detail">See more</button>
    </div>
    `;
});
$(".app").innerHTML = html.join("");

// show detail item
const listBtn = $$(".detail");
listBtn.forEach((btn, id) => {
  btn.addEventListener("click", () => {
    $(".overlay").style.display = "block";
    const itemShow = list.map((item, index) => {
      if (id == index) {
        return `
        <div class="row">
            <div class="col-5">
                <div class="left">
                    <div class="left-image">
                        <img src="${item.image}" alt="image-item">
                    </div>
                </div>
            </div>
            <div class="col-7">
                <div class="right">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="size">
                        <button>37</button>
                        <button>38</button>
                        <button>39</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                    </div>
                    <div class="amount">
                        <i class='bx bx-minus'></i>
                        <input type="text" value="1" class="amount-number">
                        <i class='bx bx-plus'></i>
                    </div>
                    <div class="group-pay">
                        <button class="btn addCart">
                            <i class='bx bx-cart-add'></i>
                            Thêm vào giỏ hàng
                        </button>
                        <button class="btn payment">Mua Ngay</button>
                    </div>
                </div>
            </div>
        </div>
        `;
      }
    });
    $(".details-item").innerHTML = itemShow.join("");
  });
});

// close module click x
$(".close").addEventListener("click", closeDetail);
function closeDetail(e) {
  e.preventDefault();
  $(".overlay").style.display = "none";
}
