//actual pin image
const pinObj = document.getElementById('pinImg');
//button
const buttonObj = document.getElementById('pinButton');



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

    // if (gPinnedflag == true) {

    //   pinObj.classList.remove('playAnim');
    //   gPinnedflag = true;
    // }

  })

// click color

buttonObj.addEventListener ('click', () => {
  buttonObj.classList.toggle ('button-click');
  pinObj.classList.toggle ('playAnim');
  
})



//toggle animation
// buttonObj.addEventListener ('click', () => {

//   //plays animation only once
//   if (gPinnedflag == false) {

//     pinObj.classList.add('pinAnim');
//     gPinnedflag = true;
//   }

// })
