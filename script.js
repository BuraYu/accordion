document.addEventListener("DOMContentLoaded", () => {
  const showQuestion1 = document.getElementById("accordion-item-1");
  const showQuestion2 = document.getElementById("accordion-item-2");
  const showQuestion3 = document.getElementById("accordion-item-3");
  const showQuestion4 = document.getElementById("accordion-item-4");
  const description1 = document.querySelector(".accordion-description-1");

  showQuestion1.addEventListener("click", () => {
    let open = false;
    if (open === true) {
      description1.style.display = "none";
      open = false;
    } else {
      description1.style.display = "contents";
      open = true;
      console.log(open);
    }
  });

  showQuestion2.addEventListener("click", () => console.log("2"));
  showQuestion3.addEventListener("click", () => console.log("3"));
  showQuestion4.addEventListener("click", () => console.log("4"));
});
