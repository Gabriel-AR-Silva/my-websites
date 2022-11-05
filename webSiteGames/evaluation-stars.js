let evaluationTotal = document.querySelector(".evaluation");
let starsList = document.querySelector('.stars-list')
let peopleQuantity = 0;

starsList.addEventListener("click", function click() {

  peopleQuantity += 1;
  let quantityText = document.createTextNode(`(${peopleQuantity})`);
  evaluationTotal.appendChild(quantityText);

});

let stars = document.querySelectorAll(".star");
document.addEventListener("click", function (e) {
  let classStar = e.target.classList;
  if (!classStar.contains("ativo")){
    stars.forEach(function (star) {
      star.classList.remove("ativo");
    });
    classStar.add("ativo");
  }
});
