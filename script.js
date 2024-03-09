document.addEventListener("DOMContentLoaded", () => {
  const image1 = document.getElementById("accordion-img-1");
  const image2 = document.getElementById("accordion-img-2");
  const image3 = document.getElementById("accordion-img-3");
  const image4 = document.getElementById("accordion-img-4");
  const description1 = document.querySelector(".accordion-description-1");
  const description2 = document.querySelector(".accordion-description-2");
  const description3 = document.querySelector(".accordion-description-3");
  const description4 = document.querySelector(".accordion-description-4");

  let open1 = false;
  let open2 = false;
  let open3 = false;
  let open4 = false;

  image1.addEventListener("click", () => {
    if (open1 === true) {
      description1.style.display = "none";
      image1.src = "./assets/images/icon-plus.svg";
      open1 = false;
    } else {
      description1.style.display = "contents";
      image1.src = "./assets/images/icon-minus.svg";
      open1 = true;
    }
  });
  image2.addEventListener("click", () => {
    if (open2 === true) {
      description2.style.display = "none";
      image2.src = "./assets/images/icon-plus.svg";
      open2 = false;
    } else {
      description2.style.display = "contents";
      image2.src = "./assets/images/icon-minus.svg";
      open2 = true;
    }
  });
  image3.addEventListener("click", () => {
    if (open3 === true) {
      description3.style.display = "none";
      image3.src = "./assets/images/icon-plus.svg";
      open3 = false;
    } else {
      description3.style.display = "contents";
      image3.src = "./assets/images/icon-minus.svg";
      open3 = true;
    }
  });
  image4.addEventListener("click", () => {
    if (open4 === true) {
      description4.style.display = "none";
      image4.src = "./assets/images/icon-plus.svg";
      open4 = false;
    } else {
      description4.style.display = "contents";
      image4.src = "./assets/images/icon-minus.svg";
      open4 = true;
    }
  });
});
