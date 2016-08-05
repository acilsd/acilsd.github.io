$(document).keypress(function(e) {
    if (e.keyCode == 27) { $("#opened-chp").fadeOut(200); }
});


var Loader = {
    init: function() {
      var delegateContainer = $('#messagebuffer');
      delegateContainer.on('click', function(e) {
        var LINK = e.target;
        if (LINK.tagName === 'IMG') {
         var SRC = LINK.src;
         document.getElementById('imageContainer').src = SRC;
         document.getElementById('opened-chp').style.display = "block";
        } else { return; }
      });
      console.log('INIT');
    }   
  }
  Loader.init();
