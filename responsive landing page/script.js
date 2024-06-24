const colors = ['#ff6347', '#6a5acd', '#20b2aa', '#ffb6c1', '#ff8c00'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    const newColor = colors[currentColorIndex];
    document.querySelector('.hero-section').style.background = `linear-gradient(135deg, ${newColor}, ${colors[(currentColorIndex + 1) % colors.length]})`;
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const progressBarElements = document.querySelectorAll('.progress-bar');
    progressBarElements.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill-level') + '%';
        bar.style.setProperty('--skill-level', skillLevel);
    });
});
