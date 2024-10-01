

  const menuToggle = document.querySelector(".menu-toggle");
  const sideMenu = document.querySelector(".side-menu");
  const backBtn = document.querySelector(".back-btn");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    sideMenu.classList.toggle("active");
  });

  backBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  });

  document.getElementById("header").addEventListener("click", function () {
    const headerText = document.getElementById("header-text");
    const text = headerText.textContent;

    if (text === "psclix presets") {
      headerText.textContent = "sanwal presets";
    } else {
      headerText.textContent = "psclix presets";
    }
  });