var focus;

function showMore() {
  focus.innerHTML = "";
  for (var i = 0; i < this.children.length; i++) {

    focus.appendChild(this.children[i].cloneNode(true));
  }
}

document.addEventListener("DOMContentLoaded", function moreInfo() {
  var chemicalElementDivs = document.getElementsByClassName("cell");
  for (var i = 0; i < chemicalElementDivs.length; i++) {

    chemicalElementDivs[i].addEventListener("mouseover", showMore);
  }
  focus = document.getElementById("focus");

})

window.onload = function() {
  var tag_arr = document.querySelector(".nonmetal");
  for (ti = 0; ti < tag_arr.length; ti++) {
    if (tag_arr[ti].className == "nonmetal") {
      tag_arr = tag_arr[ti];
      break;
    }
  }

  document.getElementById("focus").innerHTML = tag_arr.innerHTML;
}