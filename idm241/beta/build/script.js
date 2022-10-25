/* add class and remove */

//actual pin image
const pinObj = document.getElementById('pinBtn');
//button
const button = document.getElementById('button');


// pinObj.addEventListener ("click", pinFun);
pinObj.addEventListener('click', () => {
  console.log ('Pin Clicked!');
    pinObj.classList.add('pin-animation');

  })

  //hover on
  button.addEventListener('mouseenter', () => {
    button.classList.add('button-hover-on');

  })
  //hover off
  button.addEventListener('mouseleave', () => {
    button.classList.remove('button-hover-on');

  })
  //click
  button.addEventListener('mouseup', () => {
    button.classList.remove('button-hover-on');
    button.classList.add('button-click');

  })
  //click off
  button.addEventListener('mouseUp', () => {
    button.classList.toggle('button-hover-off');
    // button.classList.toggle('button-click');

  })

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
