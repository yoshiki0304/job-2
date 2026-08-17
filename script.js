(() => {
  const d = new Date();
  const el = document.getElementById('todayText');
  if (el) el.textContent = `本日 ${d.getMonth()+1}月${d.getDate()}日`;

  document.querySelectorAll('.faq-list details').forEach((item) => {
    item.addEventListener('toggle', () => {
      const btn = item.querySelector('summary b');
      if (btn) btn.textContent = item.open ? '−' : '＋';
    });
  });

  const internal = document.querySelectorAll('a[href^="#"]');
  internal.forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  }));
})();
