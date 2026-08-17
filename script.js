(() => {
  const d = new Date();
  const el = document.getElementById('dateText');
  if (el) el.textContent = `本日 ${d.getMonth()+1}月${d.getDate()}日`;

  document.querySelectorAll('.faq-list details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });

  const targets = document.querySelectorAll('.benefit-card,.job-card,.voice-card,.step-card,.comic-page,.check-list');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate([
          {opacity:0, transform:'translateY(18px)'},
          {opacity:1, transform:'translateY(0)'}
        ], {duration:500, easing:'cubic-bezier(.2,.7,.2,1)', fill:'both'});
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  targets.forEach((el) => io.observe(el));
})();
