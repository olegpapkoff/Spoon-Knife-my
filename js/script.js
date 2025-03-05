const cube = document.getElementById('cube');
const scoreElement = document.getElementById('score');
let score = 0;

// Функция для перемещения кубика
function moveCube() {
    const maxX = window.innerWidth - cube.offsetWidth;
    const maxY = window.innerHeight - cube.offsetHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    
    cube.style.left = `${newX}px`;
    cube.style.top = `${newY}px`;
}

// Клик по кубику
cube.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Счёт: ${score}`;
    moveCube();
});

// Начальное положение и движение каждые 2 секунды
moveCube();
setInterval(moveCube, 2000);