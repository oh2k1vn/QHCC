// Add active class to the current button (highlight it)
var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var modal_btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span_close = document.getElementsByClassName("close");

// Get left and right arrows
var left = document.getElementsByClassName("left");
var right = document.getElementsByClassName("right");

// set data indexes on errrythang.
function setDataIndex() {
  for (i = 0; i < modal_btn.length; i++) {
    modal_btn[i].setAttribute("data-index", i);
    modal[i].setAttribute("data-index", i);
    span_close[i].setAttribute("data-index", i);
    left[i].setAttribute("data-index", i);
    right[i].setAttribute("data-index", i);
  }
}

//add onclicks to all the model buttons and display models when clicked
for (i = 0; i < modal_btn.length; i++) {
  modal_btn[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modal[ElementIndex].style.display = "block";
    document.body.classList.add("noScroll");
  };

  // When the user clicks on <span> (x), close the modal
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

// close the modal when you click outside the box
window.onclick = function (event) {
  if (event.target === modal[event.target.getAttribute("data-index")]) {
    modal[event.target.getAttribute("data-index")].style.display = "none";
    document.body.classList.remove("noScroll");
  }
};

// Chat box
/*Hàm Mở Form*/
function moForm() {
  document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
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
    document.getElementById("header").style.background = "rgb(84, 84, 84)";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}

// updated 2019
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);
