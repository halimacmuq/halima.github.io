document.getElementById("menu-toggle").addEventListener("click", function () {
  let hiddenElements = document.getElementsByClassName("hidden");
  let max = hiddenElements.length;
  for (let i = 0; i < max; i++) {
    hiddenElements[i].classList.toggle("menu-collapse");
  }
});
