const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // 버튼 아이콘 변경 (🌙 ↔ ☀️)
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});