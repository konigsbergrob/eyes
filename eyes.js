const balls = document.getElementsByClassName('ball');

/* take mouse positions and store as variable, in terms of % of height and width of window */ 
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

/* for loop that goes through the balls array (both eyeballs) and updates their position based on where the mouse goes */  
for (let i = 0; i < 2; i++) {
  balls[i].style.left = x; 
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';
}
};
