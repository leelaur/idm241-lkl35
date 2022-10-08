

const van= document.querySelector ('.van-icon');
const button=document.querySelector ('button');

button.addEventListener('mouseover', function() {
    van.style.cssText= 'transform: translateX(-50px);transition: transform 0.2s;';
  });

button.addEventListener('mouseout', function() {
    van.style.cssText= 'transform: translateX(0);transition: transform 0.2s;';
  });

