import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const hotCollection = document.getElementsByClassName("hot");

  hotCollection.array.forEach(p => {
    p.textContent += "🔥";
  });

});
