document.getElementById("menu-toggle").addEventListener("click", function () {
  let hiddenElements = document.getElementsByClassName("hidden");
  let hiddenDm = document.getElementsByClassName("hidden-2");
  let max = hiddenElements.length;
  let max2 = hiddenDm.length;
  for (let i = 0; i < max; i++) {
    hiddenElements[i].classList.toggle("menu-collapse");
  }
  for (let j = 0; j < max2; j++) {
    hiddenDm[j].classList.toggle("collapse-darkmode");
  }
});
