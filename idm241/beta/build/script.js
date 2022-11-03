//actual pin image
const pinObj = document.getElementById('pinImg');
//button
const buttonObj = document.querySelector(".classButton");



  //hover on
  buttonObj.addEventListener('mouseenter', () => {
    buttonObj.classList.add('button-hover-on');
    buttonObj.classList.remove('button-hover-off');
    buttonObj.style.cssText= 'display: inline-block; cursor: pointer;';


  })

  var gPinnedflag = false;

  // //hover off
  buttonObj.addEventListener('mouseleave', () => {
    buttonObj.classList.remove('button-hover-on');
    buttonObj.classList.add('button-hover-off');
    buttonObj.style.removeProperty ('display', 'cursor');

  })

  pinObj.addEventListener('mouseleave', () => {
    pinObj.classList.remove ('playAnim');
    gPinnedflag= true;
  })

// click color

buttonObj.addEventListener ('click', () => {
  buttonObj.classList.toggle ('button-click');

  if (gPinnedflag== false) {
    pinObj.classList.add ('playAnim');
  }
  else if (gPinnedflag==true) {
    pinObj.classList.remove ('playAnim');
    gPinnedflag = false;
  }
  
})



//toggle animation
// buttonObj.addEventListener ('click', () => {

//   //plays animation only once
//   if (gPinnedflag == false) {

//     pinObj.classList.add('pinAnim');
//     gPinnedflag = true;
//   }

// })
