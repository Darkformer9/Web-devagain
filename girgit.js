let Girgit = document.getElementById('gitgitan');
Girgit.addEventListener('mouseover', function() {
    Girgit.style.backgroundColor = 'blue';
});
Girgit.addEventListener('mouseout', function() {
    Girgit.style.backgroundColor = 'red';
});
window.addEventListener('mousemove', function(event) {
    Girgit.style.top = event.clientY + 'px';
    Girgit.style.left = event.clientX + 'px';
});






// we have discussed about how mouseover and mouseout and mousemove works