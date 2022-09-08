const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function imageZoom(image, boxZoom) {
  var cx, cy;
  var img = $(".image");
  var box = $(".box-zoom");
  // create lens
  const lens = document.createElement("section");
  lens.setAttribute("class", "lens");
  img.parentElement.insertBefore(lens, img);
  // set ratio boxZoom / lens
  cx = box.offsetWidth / lens.offsetWidth;
  cy = box.offsetHeight / lens.offsetHeight;
  // set background of the box-zoom
  box.style.backgroundImage = "url(" + img.src + ")";
  box.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  // set position lens when mouse move
  function moveLens(e) {
    e.preventDefault();
    var lensX, lensY, pos;

    pos = getPosMouse(e);
    lensX = pos.mouseX - lens.offsetWidth / 2;
    lensY = pos.mouseY - lens.offsetHeight / 2;
    // set position lens
    lens.style.left = lensX + "px";
    lens.style.top = lensY + "px";
    box.style.backgroundPosition = `-${lensX * cx}px -${lensY * cy}px`;
    $(".posLens").innerText = `LensX: ${lensX}, LensY: ${lensY}`;
  }
  // get position mouse move
  function getPosMouse(e) {
    var x = 0,
      y = 0;
    const image = img.getBoundingClientRect();
    e = e || window.event;

    x = e.pageX - image.left;
    y = e.pageY - image.top;

    $(".posMouse").innerText = `MouseX: ${x}, MouseY: ${y}`;
    return { mouseX: x, mouseY: y };
  }
}

$(".image").addEventListener("mouseover", () => {
  imageZoom(".image", ".box-zoom");
});
