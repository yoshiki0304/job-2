(() => {
  const date = new Date();
  const label = document.getElementById('todayLabel');
  if (label) label.textContent = `本日 ${date.getMonth()+1}月${date.getDate()}日`;

  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -30px' });
  els.forEach(el => io.observe(el));

  const sticky = document.getElementById('stickyCta');
  const footer = document.querySelector('.footer');
  if (sticky && footer) {
    const footerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => sticky.classList.toggle('is-hidden', entry.isIntersecting));
    }, { threshold: .02 });
    footerObserver.observe(footer);
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
