const track = document.getElementById('mangaTrack');
const dots = Array.from(document.querySelectorAll('#mangaDots span'));
const prevBtn = document.querySelector('.manga-arrow.left');
const nextBtn = document.querySelector('.manga-arrow.right');

function cardStep(){
  const card = track.querySelector('.manga-card');
  return card ? card.getBoundingClientRect().width + 14 : 240;
}

function updateDots(){
  const step = cardStep();
  const maxIndex = dots.length - 1;
  const raw = Math.round(track.scrollLeft / step);
  const index = Math.max(0, Math.min(maxIndex, raw));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

prevBtn.addEventListener('click', () => track.scrollBy({left: -cardStep(), behavior: 'smooth'}));
nextBtn.addEventListener('click', () => track.scrollBy({left: cardStep(), behavior: 'smooth'}));
track.addEventListener('scroll', updateDots, {passive:true});
window.addEventListener('load', () => {
  track.scrollLeft = track.scrollWidth;
  updateDots();
});
window.addEventListener('resize', updateDots);
