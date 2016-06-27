// NOTE: fixie-navigation menu
(function() {
  'use strict';
  var h = document.getElementById("sticky");
  var stuck = false;
  var stickPoint = getDistance();
  function debounce(func, wait, immediate) {
	   var timeout;
	    return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
		  };
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
	  };
  };
 function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
 };
 var stickyHeader = debounce(function() {
   var distance = getDistance() - window.pageYOffset;
   var offset = window.pageYOffset;
   if ( (distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '0px';
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stuck = false;
  };
 }, 100);
 window.addEventListener('scroll', stickyHeader);
}());

// NOTE: scroll
(function() {
  'use strict';
  var menuLink = document.querySelectorAll('.menu-link');
  var menuList = {};
  var i = 0;
  function debounce(func, wait, immediate) {
	   var timeout;
	    return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
		  };
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
	  };
  };
  Array.prototype.forEach.call(menuLink, function(e) {
      menuList[e.id] = e.offsetTop;
  });
  var scrollSpy = debounce(function() {
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    for(i in menuList) {
      if(menuList[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', 'navigation__link');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'navigation__link active');
      }
    }
  },50);
  window.addEventListener('scroll', scrollSpy);
}());



// NOTE: buttons
(function() {

}());
