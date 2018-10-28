var form = document.querySelector(".contest-form");
var name = document.getElementById("surname");
var surname = document.getElementById("surname");
var mail = document.getElementById("mail");
var button = document.querySelector(".js-submit");
var modalError = document.querySelector(".modal--error");
var modalDone = document.querySelector(".modal--done");
var buttonError = modalError.querySelector(".modal__button");
var buttonDone = modalDone.querySelector(".modal__button");
var required = [name, surname, mail];

function modalClose() {
  modalError.classList.add("modal--error");
});

function validate() {
  for(var i=0; i < required.length; i++) {
    if(required[i].value == "") {
      modalError.classList.remove("modal--error");
      required[i].focus();
      button.disabled = true;
      return false;
    }
  }
  modalDone.classList.remove("modal--done");
  return true;
}

  //
  // required[i].style.border = "2px solid red";

//
// buttonDone.addEventListener("click", function() {
//   modalDone.classList.add("modal--done");
// });
