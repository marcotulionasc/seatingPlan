var scale = 1;
var container = document.getElementById('zoomContainer');
var zoomInButton = document.getElementById('zoomIn');
var zoomOutButton = document.getElementById('zoomOut');

zoomInButton.addEventListener('click', function() {
    scale += 0.1;
    container.style.transform = 'scale(' + scale + ')';
});

zoomOutButton.addEventListener('click', function() {
    scale -= 0.1;
    container.style.transform = 'scale(' + scale + ')';
});