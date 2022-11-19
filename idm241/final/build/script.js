//actual pin image
const pinObj = document.getElementById('pinImg');
//button
const buttonObj = document.querySelector(".classButton");
const imgObj = document.querySelector('.image');
const entire = document.querySelector('.entire');


  //hover on pin button
  buttonObj.addEventListener('mouseenter', () => {
    buttonObj.classList.add('button-hover-on');
    buttonObj.classList.remove('button-hover-off');
    buttonObj.style.cssText= ' cursor: pointer;';
    buttonObj.style.display="block";
    imgObj.classList.add('fadeIn');
  })

   // //hover off pin button
   buttonObj.addEventListener('mouseleave', () => {
    buttonObj.classList.remove('button-hover-on');
    buttonObj.classList.add('button-hover-off');
  })



//hover on card image
  imgObj.addEventListener('mouseenter', () => {
    buttonObj.style.display="block";
    imgObj.style.cssText= 'cursor:zoom-in;';
    imgObj.classList.add('fadeIn');
  })

  //hover off card image 
  imgObj.addEventListener('mouseleave', () => {
    buttonObj.style.display="none";
    pinObj.classList.remove ('pinAnim');
    imgObj.classList.remove('fadeIn');

  })


// click pin
let gPinDown = false;
buttonObj.addEventListener ('click', () => {
  buttonObj.classList.toggle ('button-click');
  console.log ("pin click!");

  // animate only when pin was clicked
  if (gPinDown==false) {
    gPinDown = true;
    pinObj.classList.add ('pinAnim');
    console.log ("pin animate!");
  } else {
    gPinDown = false;
    pinObj.classList.remove ('pinAnim');
  }
  
})


