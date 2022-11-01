/* add class and remove */

//actual pin image
const pinObj = document.getElementById('pinBtn');
//button
const buttonObj = document.getElementById('pinButton');
//  let isPinned = false;

// pinObj.addEventListener ("click", pinFun);
// pinObj.addEventListener('click', () => {
//   console.log ('Pin Clicked!');
//     // pinObj.classList.add('pin-animation');

//   })


//HERE

  //hover on
  buttonObj.addEventListener('mouseenter', () => {
    buttonObj.classList.add('button-hover-on');


  })
  //hover off
  buttonObj.addEventListener('mouseleave', () => {
    buttonObj.classList.remove('button-hover-on');

    // if (isPinned == false){
    //   button.classList.remove('pinAnim');
    //   isPinned = true;
    // }

    // if (isPinned == true) {
    //   button.classList.add ('pinAnim');
    //   isPinned = false;
    // }
    
    // button.classList.remove('pinAnim');


  })






  // //click
  // button.addEventListener('mouseup', () => {
  //   button.classList.remove('button-hover-on');
  //   button.classList.add('button-click');

  // // })
  // //click off
  // button.addEventListener('mouseUp', () => {
  //   button.classList.toggle('button-hover-off');
  //   button.classList.toggle('button-click');

  // })

  // button.addEventListener.off('click', () => {
  //   button.classList.remove('button-change');

  // })

// it works but only after hoveroff. WHY??

// function pinFun() {
//     alert('message');
// }

/* trying to change color on click */
// function pinFun() {
//     button.textContent = 'Animation';
//     button.classList.add('pin-animation')

// }



//HERE

// click color

button.addEventListener ('click', () => {
    button.classList.toggle ("button-click");
  })




var gPinnedflag = false;

//toggle animation
button.addEventListener ('click', () => {

  //plays animation only once
  if (gPinnedflag == false) {

    button.classList.toggle('pinAnim');
    gPinnedflag = true;
  }

})





//WORKIN TOGGLE ONLY 

// button.addEventListener ('click', () => {
//   button.classList.toggle('pinAnim');
//   })





//ATTEMPT USING BOOLEAN??
//   const timesClicked = 0;
//   button.addEventListener ('click', () => {
//     button.classList.add('pinAnim');
//     timesClicked++;
//   })

//   //check if the number is even
// if(timesClicked % 2 == 0) {
//   console.log("The number is even.");
// });