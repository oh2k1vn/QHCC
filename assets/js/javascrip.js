var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var modal = document.getElementsByClassName("modal");
var modal_btn = document.getElementsByClassName("myBtn");
var span_close = document.getElementsByClassName("close");
var left = document.getElementsByClassName("left");
var right = document.getElementsByClassName("right");
function setDataIndex() {
  for (i = 0; i < modal_btn.length; i++) {
    modal_btn[i].setAttribute("data-index", i);
    modal[i].setAttribute("data-index", i);
    span_close[i].setAttribute("data-index", i);
    left[i].setAttribute("data-index", i);
    right[i].setAttribute("data-index", i);
  }
}
for (i = 0; i < modal_btn.length; i++) {
  modal_btn[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modal[ElementIndex].style.display = "block";
    document.body.classList.add("noScroll");
  };
  span_close[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modal[ElementIndex].style.display = "none";
    document.body.classList.remove("noScroll");
  };
  right[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    var CurrentModal = parseInt(ElementIndex, 10);
    if (CurrentModal === modal_btn.length - 1) {
      var NextModal = 0;
    } else {
      var NextModal = CurrentModal + 1;
    }
    modal[CurrentModal].style.display = "none";
    modal[NextModal].style.display = "block";
  };
  left[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    var CurrentModal = parseInt(ElementIndex, 10);
    if (CurrentModal === 0) {
      var PreviousModal = modal_btn.length - 1;
    } else {
      var PreviousModal = CurrentModal - 1;
    }
    modal[PreviousModal].style.display = "block";
    modal[CurrentModal].style.display = "none";
  };
}
window.onload = function () {
  setDataIndex();
};
window.onclick = function (event) {
  if (event.target === modal[event.target.getAttribute("data-index")]) {
    modal[event.target.getAttribute("data-index")].style.display = "none";
    document.body.classList.remove("noScroll");
  }
};
function moForm() {
  document.getElementById("myForm").style.display = "block";
}
function dongForm() {
  document.getElementById("myForm").style.display = "none";
}
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("header").style.background = "rgba(0,0,0,.5)";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}
var modalLogin = document.getElementById("myModal_login");
console.log(modalLogin);
var btnLogin = document.getElementById("myBtn_login");
var spanLogin = document.getElementsByClassName("close_login")[0];
btnLogin.onclick = function () {
  modalLogin.style.display = "block";
};
spanLogin.onclick = function () {
  modalLogin.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modalLogin.style.display = "none";
  }
};
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
