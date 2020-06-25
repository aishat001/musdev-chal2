var toggleDark = document.querySelector(".toggle");
var column = document.querySelectorAll("div.col");
var column_ = document.querySelectorAll("div.col_");

document.querySelector(".toggles").addEventListener("click", function () {
      toggleDark.classList.toggle("auto");
      document.body.classList.toggle("toggle-body-color");
      column.forEach( function (el) {
            el.classList.toggle("col-bgColor");
        })
        column_.forEach( function (el) {
            el.classList.toggle("col-bgColor");
      })
      document.querySelector(".toggles").classList.toggle("grey_b");
      document.querySelector(".containerBg").style.display = "flex";
      document.querySelector(".containerBg").classList.toggle("toggle-container-color");
  });