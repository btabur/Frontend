const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth/300);
  let clicCounter = 0;
  const imgItemCount = movieList[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imgItemCount - (4 + clicCounter) + (4 -widthRatio) >= 0) {
      clicCounter++;
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clicCounter =0; 
    }
  });
});
// !dark mode

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar, .sidebar i, .toggle , .toggle-ball, .movie-list-filter select, .movie-list-container h1 "
);
ball.addEventListener("click", function () {
    items.forEach((item)=> item.classList.toggle("active"));
});
