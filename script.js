document.getElementById("menuToggle").addEventListener("click", function() {
  console.log('click')
  this.classList.toggle("change");
  document.getElementById("menu").style.display = document.getElementById("menu").style.display === "block" ? "none" : "block";
  this.innerHTML = this.classList.contains("change") ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
});