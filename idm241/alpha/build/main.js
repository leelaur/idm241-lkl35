

const van= document.querySelector ('.van-icon');
const button=document.querySelector ('button');

button.addEventListener('mouseover', function() {
    van.style.cssText= 'position:relative;right:50px;transition: 2s ease-in-out;';
  });

  button.addEventListener('mouseout', function() {
    van.style.cssText= '';
  });

