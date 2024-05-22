function changeColor(element) {
    element.classList.add('active');
    var svgIcon = element.querySelector('img');
    if (svgIcon) {
        svgIcon.style.fill = 'blue'; 
    }
}