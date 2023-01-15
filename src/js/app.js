import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const hotCollection = document.querySelectorAll("p.hot");

  hotCollection.array.forEach(p => {
    p.textContent += "🔥";
  });

});
