const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Oscuro';
    } else {
        themeToggleBtn.textContent = 'Claro';
    }
});
