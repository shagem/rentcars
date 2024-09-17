(() => {
  // input.js
  document.getElementById("menuBtn").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    let body = document.body;
    let menuIcon = document.getElementById("menuIcon");
    let isMenuVisible = menu.classList.contains("translate-y-0");
    if (isMenuVisible) {
      menu.classList.remove("translate-y-0", "opacity-100");
      menu.classList.add("-translate-y-full", "opacity-0");
      body.style.overflow = "auto";
      menuIcon.setAttribute("fill", "#1572D3");
    } else {
      menu.classList.remove("-translate-y-full", "opacity-0");
      menu.classList.add("translate-y-0", "opacity-100");
      body.style.overflow = "hidden";
      menuIcon.setAttribute("fill", "#ffffff");
    }
  });
})();
