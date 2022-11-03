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


  })

  //hover off image BUTTON
  imgObj.addEventListener('mouseleave', () => {
    buttonObj.style.display="none";

  })

  // //hover off
  buttonObj.addEventListener('mouseleave', () => {
    buttonObj.classList.remove('button-hover-on');
    buttonObj.classList.add('button-hover-off');


  })

// click color

buttonObj.addEventListener ('click', () => {
  buttonObj.classList.toggle ('button-click');
  pinObj.classList.toggle ('pinAnim');
  
})




//toggle animation
// buttonObj.addEventListener ('click', () => {

//   //plays animation only once
//   if (gPinnedflag == false) {

//     pinObj.classList.add('pinAnim');
//     gPinnedflag = true;
//   }

// })
