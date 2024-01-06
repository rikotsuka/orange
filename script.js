let circleCount = 0;

function addCircle() {
  const container = document.getElementById('container');
  const diameter = 5;
  const circle = document.createElement('div');
  circle.className = 'circle';
  let x, y;

  do {
    x = Math.random() * (container.offsetWidth - diameter);
    y = Math.random() * (container.offsetHeight - diameter);
  } while (isOverlapping(x, y, diameter));

  circle.style.width = `${diameter}cm`;
  circle.style.height = `${diameter}cm`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  container.appendChild(circle);

  circle.addEventListener('click', function() {
    stackCircles(circle, diameter);
  });
}

function isOverlapping(x, y, diameter) {
  const circles = document.querySelectorAll('.circle');
  for (const circle of circles) {
    const rect = circle.getBoundingClientRect();
    if (
      x < rect.right &&
      x + diameter > rect.left &&
      y < rect.bottom &&
      y + diameter > rect.top
    ) {
      return true;
    }
  }
  return false;
}

function stackCircles(circle, diameter) {
  const container = document.getElementById('container');
  const stackingHeight = diameter;

  circle.style.top = `${stackingHeight * circleCount}px`;
  circleCount++;

  if (circleCount >= 5) {
    setTimeout(() => {
      container.innerHTML = '';
      circleCount = 0;
    }, 2000); // アニメーションの持続時間に合わせて変更
  }
}
