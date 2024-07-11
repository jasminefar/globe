const globe = document.querySelector('.globe');

let isDragging = false;
let previousX = 0;
let rotationY = 0;

globe.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
});

globe.addEventListener('mouseup', () => {
  isDragging = false;
});

globe.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let delta = e.clientX - previousX;
    rotationY += delta * 0.1;
    globe.style.transform = `rotateY(${rotationY}deg)`;
    previousX = e.clientX;
  }
});
