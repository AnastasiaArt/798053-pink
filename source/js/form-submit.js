var form = document.querySelector(".contest-form");
var name = document.getElementById("surname");
var surname = document.getElementById("surname");
var mail = document.getElementById("mail");
var button = document.querySelector(".js-submit");
var modalError = document.querySelector(".modal--error");
var modalDone = document.querySelector(".modal--done");

var required = [name, surname, mail];

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
