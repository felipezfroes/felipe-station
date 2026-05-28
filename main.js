/* ===========================
   PARTÍCULAS FLUTUANTES
=========================== */
const pts = document.getElementById('pts');

for (let i = 0; i < 16; i++) {
  const p  = document.createElement('div');
  p.className = 'p';
  const sz = (1 + Math.random() * 2) + 'px';

  p.style.cssText = `
    width: ${sz};
    height: ${sz};
    left: ${Math.random() * 100}%;
    top: ${100 + Math.random() * 100}%;
    background: rgba(255, 255, 255, 0.6);
    animation-duration: ${10 + Math.random() * 14}s;
    animation-delay: ${Math.random() * 14}s;
  `;

  pts.appendChild(p);
}

/* ===========================
   EFEITO RIPPLE NOS LINKS
=========================== */
document.querySelectorAll('.link').forEach(el => {
  el.addEventListener('click', e => {
    const r  = el.getBoundingClientRect();
    const rp = document.createElement('span');
    const sz = 60;

    rp.className    = 'ripple';
    rp.style.width  = sz + 'px';
    rp.style.height = sz + 'px';
    rp.style.left   = (e.clientX - r.left - sz / 2) + 'px';
    rp.style.top    = (e.clientY - r.top  - sz / 2) + 'px';

    el.appendChild(rp);
    setTimeout(() => rp.remove(), 650);
  });
});

/* ===========================
   TILT 3D AO MOVER O MOUSE
=========================== */
const card = document.getElementById('card');

document.addEventListener('mousemove', e => {
  const r  = card.getBoundingClientRect();
  const dx = (e.clientX - (r.left + r.width  / 2)) / r.width;
  const dy = (e.clientY - (r.top  + r.height / 2)) / r.height;

  card.style.transform  = `perspective(900px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg)`;
  card.style.transition = 'transform 0.08s ease';
});

document.addEventListener('mouseleave', () => {
  card.style.transform  = '';
  card.style.transition = 'transform 0.5s ease';
});