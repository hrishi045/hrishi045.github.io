window.addEventListener('mousedown', handler);
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false);
window.addEventListener('wheel', handler);

function handler(e) {
  e.preventDefault();
  console.log(e);
  if (e.deltaY < 0) Reveal.prev();
  if (e.deltaY > 0) Reveal.next();
}