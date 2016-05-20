var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('main-navigation--visible');
}

var modal = document.getElementById('show-button');
modal.onclick = function(f){
  f.preventDefault();
  modal.classList.toggle('show-button--close');
  document.getElementById('form').classList.toggle('modal-form--show');
}
