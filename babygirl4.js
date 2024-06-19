document.getElementById('shreya').addEventListener('mouseover', function() {
    const button = document.getElementById('shreya');
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
});
