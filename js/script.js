var link = document.querySelector(".search-button-map");
var popup = document.querySelector(".form");

popup.classList.toggle("form-hide");

var form = popup.querySelector("form");
var date_in = popup.querySelector("[name=date_in]");
var date_out = popup.querySelector("[name=date_out]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");



try {
  adultsStorage = localStorage.getItem("adults");
  kidsStorage = localStorage.getItem("kids");
  isStorageSupport = true;
} catch (err) {
  isStorageSupport = false;
}

if (adultsStorage !== null) {
  adults.value = adultsStorage;
}
if (kidsStorage !== null) {
  kids.value = kidsStorage;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("form-hide");
  date_in.focus();
});

form.addEventListener("submit", function(evt) {
  if (!date_in.value ||
    !date_out.value ||
    !adults.value ||
    !kids.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно заполнить все поля");
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("kids", kids.value);
  }
});
