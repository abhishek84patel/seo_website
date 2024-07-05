window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
document.querySelector('#menu-btn').addEventListener('click', function () {
  const navbar = document.getElementById('megamenu-cta');
  navbar.classList.toggle('hidden');
});
