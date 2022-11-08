//actual pin image
const pinObj = document.getElementById('pinImg');
//button
const buttonObj = document.querySelector(".classButton");
const imgObj = document.querySelector('.image');

const modal = document.querySelector('.modal');
const close = document.querySelector('.close-arrow');


  //hover on pin button
  buttonObj.addEventListener('mouseenter', () => {
    buttonObj.classList.add('button-hover-on');
    buttonObj.classList.remove('button-hover-off');
    buttonObj.style.cssText= ' cursor: pointer;';
    buttonObj.style.display="block";
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
  })

  //hover off card image 
  imgObj.addEventListener('mouseleave', () => {
    buttonObj.style.display="none";
    pinObj.classList.remove ('pinAnim');

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

//modal 
modal.style.display="none";

imgObj.addEventListener ('click', () => {
  modal.style.display="block";
  modal.classList.add ('modalUp');
})

close.addEventListener ('click', () => {
  modal.style.display="none";
})

