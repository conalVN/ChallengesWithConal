var text = document.getElementById("text");
console.log(text);
var shadow = "";

for (var i = 0; i < 30; i++) {
  shadow += (shadow ? "," : " ") + (-i * 1 + "px ") + (i * 1 + "px 0 #d9d9d9");
}
console.log(shadow);
text.style.textShadow = shadow;
