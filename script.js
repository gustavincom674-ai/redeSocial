document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("like-btn");
  const likesCountSpan = document.getElementById("likes-count");
  const totalLikesText = document.getElementById("total-likes-text");
  const postMedia = document.getElementById("post-media");
  const bookmarkBtn = document.getElementById("bookmark-btn");

  let likesCount = 0;

  function updateLikesDisplay() {
    likesCountSpan.textContent = likesCount;
    totalLikesText.textContent = `${likesCount} pessoas`;
  }

  function triggerHeartAnimation() {
    const svg = likeBtn.querySelector("svg");
    if (svg) {
      svg.style.transform = "scale(1.3)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  }

  function addLike() {
    likesCount++;
    likeBtn.classList.add("liked");
    updateLikesDisplay();
    triggerHeartAnimation();
  }

  // Evento de clique no botão de coração
  if (likeBtn) {
    likeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Evento de clique na imagem (mídia do post)
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Evento de clique no botão de salvar (bookmark)
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const svg = bookmarkBtn.querySelector("svg");
      if (svg) {
        svg.style.transform = "scale(1.2)";
        setTimeout(() => {
          svg.style.transform = "scale(1)";
        }, 150);
      }
    });
  }
});