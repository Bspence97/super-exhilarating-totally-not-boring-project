function showImage() {
  var image = document.querySelector(".myImg");
  image.style["display"] = "block";
}

var el = document.querySelector(".item");
el.addEventListener("click", showImage, false);
