// Kalbe basınca kalbin içini dolduran fonksiyon
// function toggleHeart() {
//   var heartIcon = document.getElementById("heartIcon");

//   if (heartIcon.classList.contains("fa-heart-o")) {
//     heartIcon.classList.remove("fa-heart-o");
//     heartIcon.classList.add("fa-heart");
//   } else {
//     heartIcon.classList.remove("fa-heart");
//     heartIcon.classList.add("fa-heart-o");
//   }
// }

function fillHeart(clickedHeart) {
  // Tıklanan yıldızın index değerini al
  var heartIndex = Array.from(clickedHeart.parentNode.children).indexOf(clickedHeart);

  // Tıklanan yıldız ve üzerindeki yıldızların sınıflarını güncelle
  for (var i = 0; i <= heartIndex; i++) {
    clickedHeart.parentNode.children[i].classList.remove("fa-heart-o");
    clickedHeart.parentNode.children[i].classList.add("fa-heart");
  }

  // Geri kalan yıldızları boşalt
  for (var j = heartIndex + 1; j < clickedHeart.parentNode.children.length; j++) {
    clickedHeart.parentNode.children[j].classList.remove("fa-heart");
    clickedHeart.parentNode.children[j].classList.add("fa-heart-o");
  }
}