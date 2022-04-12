var ratingElement;
const resetRating = (ev) => {
  const currentRating = ratingElement.dataset.rating;
  highlightRating(currentRating);
};
const highlightRating = (rating) => {
  stars.forEach((star) => {
    star.style.color =
      rating >= star.getAttribute("data-value") ? "yellow" : "gray";
  });
  // resetRating();
};

export function Rater(ratingElement) {
  ratingElement = ratingElement;
  const stars = ratingElement.querySelectorAll(".star");
}
