var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "20%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



function filter() {
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);

  // If either min or max is not a number (NaN), display all items
  if (isNaN(min) && isNaN(max)) {
      for (i = 0; i < elements.length; i++) {
          elements[i].style.display = "flex";
      }
      return;
  }

  for (i = 0; i < elements.length; i++) {
      var value = parseInt(elements[i].getAttribute("value"));

      if ((!isNaN(min) && value >= min) && (!isNaN(max) && value <= max)) {
          elements[i].style.display = "flex"; // Show items within the range
      } else if (isNaN(min) && value <= max) {
          elements[i].style.display = "flex"; // Show items below max if min is not set
      } else if (isNaN(max) && value >= min) {
          elements[i].style.display = "flex"; // Show items above min if max is not set
      } else {
          elements[i].style.display = "none"; // Hide items not within the range
      }
  }
}



function mens1(){
    {
        window.location.href='mens.html?';
      }
}



function womens1(){
    window.location.href='womens.html?';
}