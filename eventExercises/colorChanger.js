document.addEventListener('click',  changeColor);

function changeColor(e) {
    colors = {'squareOne': 'red', 'squareTwo': 'green', 'squareThree': 'blue'}
    var target = e.target || e.srcElement;
    target.style.backgroundColor = colors[target.id];
    return false;
}
