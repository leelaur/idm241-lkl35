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

  button.addEventListener('click', () => {
    button.classList.add('button-change');

  })

  button.addEventListener.off('click', () => {
    button.classList.remove('button-change');

  })

// it works but only after hoveroff. WHY??

// function pinFun() {
//     alert('message');
// }

/* trying to change color on click */
// function pinFun() {
//     button.textContent = 'Animation';
//     button.classList.add('pin-animation')

// }
