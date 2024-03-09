document.addEventListener("DOMContentLoaded", () => {
  const showQuestion1 = document.getElementById("accordion-item-1");
  const showQuestion2 = document.getElementById("accordion-item-2");
  const showQuestion3 = document.getElementById("accordion-item-3");
  const showQuestion4 = document.getElementById("accordion-item-4");
  const description1 = document.querySelector(".accordion-description-1");
  const description2 = document.querySelector(".accordion-description-2");
  const description3 = document.querySelector(".accordion-description-3");
  const description4 = document.querySelector(".accordion-description-4");

  let open1 = false;
  let open2 = false;
  let open3 = false;
  let open4 = false;

  showQuestion1.addEventListener("click", () => {
    if (open1 === true) {
      description1.style.display = "none";
      open1 = false;
    } else {
      description1.style.display = "contents";
      open1 = true;
    }
  });

  showQuestion2.addEventListener("click", () => {
    if (open2 === true) {
      description2.style.display = "none";
      open2 = false;
    } else {
      description2.style.display = "contents";
      open2 = true;
    }
  });
  showQuestion3.addEventListener("click", () => {
    if (open3 === true) {
      description3.style.display = "none";
      open3 = false;
    } else {
      description3.style.display = "contents";
      open3 = true;
    }
  });
  showQuestion4.addEventListener("click", () => {
    if (open4 === true) {
      description4.style.display = "none";
      open4 = false;
    } else {
      description4.style.display = "contents";
      open4 = true;
    }
  });
});
