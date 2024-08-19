const btnLight = document.getElementById("btnLight");
const btnDark = document.getElementById("btnDark");
const content = document.getElementById("content");

const tooltipLink = document.getElementById("tooltip-link");
const tooltipBox = document.querySelector(".tooltip-box");
const imgElement = document.querySelector(".tooltip-img");
btnLight.addEventListener("click", () => {
  content.classList.toggle("hidden");
});

btnDark.addEventListener("click", () => {
  if (!content.classList.contains("hidden")) {
    content.classList.add("hidden");
  }
});

// Check if elements exist to avoid errors
if (tooltipLink && tooltipBox) {
  tooltipLink.addEventListener("click", () => {
    tooltipBox.classList.toggle("hide");
    tooltipLink.classList.toggle("shareBtnDark");
  });
}

tooltipLink.addEventListener("click", function () {
  imgElement.src = imgElement.src.includes("assets/imgs/icon-share.svg")
    ? "assets/imgs/icon-share-light.svg"
    : "assets/imgs/icon-share.svg";
});
