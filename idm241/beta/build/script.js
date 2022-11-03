//actual pin image
const pinObj = document.getElementById('pinImg');
//button
const buttonObj = document.querySelector(".classButton");
const imgObj = document.querySelector('.image');


  //hover on
  buttonObj.addEventListener('mouseenter', () => {
    buttonObj.classList.add('button-hover-on');
    buttonObj.classList.remove('button-hover-off');
    buttonObj.style.cssText= ' cursor: pointer;';
    buttonObj.style.display="block";



  })
//hover on image
  imgObj.addEventListener('mouseenter', () => {
    buttonObj.style.display="block";
    imgObj.style.cssText= 'cursor:zoom-in;';
    pinObj.classList.remove ('pinAnim');
  })

  //hover off image BUTTON
  imgObj.addEventListener('mouseleave', () => {
    buttonObj.style.display="none";
    pinObj.classList.remove ('pinAnim');

  })

  // //hover off
  buttonObj.addEventListener('mouseleave', () => {
    buttonObj.classList.remove('button-hover-on');
    buttonObj.classList.add('button-hover-off');


  })

// click color
let gPinDown = false;
buttonObj.addEventListener ('click', () => {
  buttonObj.classList.toggle ('button-click');
  console.log ("pin click!");
  pinObj.classList.add ('pinAnim');
  
  if (gPinDown==false) {
    gPinDown = true;
    console.log ("pin animate!");
  } 
  
})


