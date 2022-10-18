/* add class and remove */
const pinObj = document.getElementById('pinBtn');
const button = document.getElementsByClassName('button')

pinObj.addEventListener ("click", pinFun);

/* TEST
function pinFun() {
    alert('message');
}
*/

/* trying to change color on click */
function pinFun() {
    document.button.style.color = "black";

}
