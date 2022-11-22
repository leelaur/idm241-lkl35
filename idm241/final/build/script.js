//actual pin image
const pinObj = document.getElementById('pinImg');
//button
const buttonObj = document.querySelector(".classButton");
const imgObj = document.querySelector('.photoImg');
const entire = document.querySelector('.entire');
//MODAL
const pinned = document.querySelector('.pinnedModal');
const undo = document.querySelector('.undoBtn');
const cancelX = document.querySelector('.xSymbol');
const pinnedContent = document.querySelector('.modalContent');

const removed = document.querySelector('.removedModal');


  //hover on pin button
  buttonObj.addEventListener('mouseenter', () => {
    buttonObj.classList.add('button-hover-on');
    buttonObj.classList.remove('button-hover-off');
    buttonObj.style.cssText= ' cursor: pointer;';
    buttonObj.style.display="block";
    imgObj.classList.add('fadeInFilter');
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
    imgObj.classList.add('fadeInFilter');
    buttonObj.classList.add('fadeInBtn');
  })

  //hover off card image 
  imgObj.addEventListener('mouseleave', () => {
    buttonObj.style.display="none";
    pinObj.classList.remove ('pinAnim');
    imgObj.classList.remove('fadeInFilter');
    buttonObj.classList.remove('fadeInBtn');

  })


// pinned and removed modal display none
pinned.style.display="none";
removed.style.display="none";

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


    //removed modal after pinned 
    removed.classList.remove ('slide-out');
    removed.classList.remove ('slide-in');
    removed.style.display="none";

      //modal
  pinned.style.display="block";
  pinned.classList.add ('pinnedModalAnim');

  } else {
    gPinDown = false;
    pinObj.classList.remove ('pinAnim');
    // pinned.style.display="none";

    //removed modal 
    removed.style.display = "block";
    removed.classList.add ('slide-in');
    setTimeout(() => {
      removed.classList.remove ('slide-in');
      removed.classList.add ('slide-out');

  }, 2000);
  setTimeout(() => {
    removed.style.display="none";
    removed.classList.remove ('slide-out');
}, 3000);
pinned.classList.add ('fade-out');
setTimeout(() => {
      pinned.classList.remove ('fade-out');
      pinned.style.display="none";
  }, 1000);
    } 
  
})



// close pinned modal 

cancelX.addEventListener ('click', () => {
  pinned.classList.add ('exitAnim');
  pinnedContent.classList.add ('exitAnim-content');
  
  setTimeout(() => {
    pinned.style.display="none";
    pinned.classList.remove ('exitAnim');
    pinnedContent.classList.remove ('exitAnim-content');

}, 700);

})





// removed modal
removed.style.display="none";


//undo 
undo.addEventListener ('click', () => {
  pinned.classList.add ('exitAnim');
  pinnedContent.classList.add ('exitAnim-content');
  buttonObj.classList.toggle ('button-click');
  gPinDown=false;
  
  
  setTimeout(() => {
    pinned.style.display="none";
    pinned.classList.remove ('exitAnim');
    pinnedContent.classList.remove ('exitAnim-content');

}, 700);

removed.style.display = "block";
    removed.classList.add ('slide-in');
    setTimeout(() => {
      removed.classList.remove ('slide-in');
      removed.classList.add ('slide-out');

  }, 2000);
  setTimeout(() => {
    removed.style.display="none";
    removed.classList.remove ('slide-out');
}, 3000);
pinned.classList.add ('fade-out');
setTimeout(() => {
      pinned.classList.remove ('fade-out');
      pinned.style.display="none";
  }, 1000);

})





