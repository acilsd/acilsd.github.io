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
}, 40);
 window.addEventListener('scroll', stickyHeader);
}());

// NOTE: scroll
(function() {
  'use strict';
  var menuLink = document.querySelectorAll('.menu-link');
  var menuList = {};
  var linkHashList = document.querySelectorAll('[href^="#link"]');
  var scrollSpeed = 0.3;
  // console.log(linkHashList);
    // NOTE: smooth scroll by hash
  for (var i = 0; i < linkHashList.length; i++) {
    linkHashList[i].onclick = function() {
      var pageWidth = window.pageYOffset;
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      var top = document.querySelector(hash).getBoundingClientRect().top;
      var start = null;
      requestAnimationFrame(step);
      function step(time) {
        if(start === null) {start = time;}
        var progress = time - start;
        var rect = (top < 0 ? Math.max(pageWidth - progress / scrollSpeed, pageWidth + top) : Math.min(pageWidth + progress / scrollSpeed, pageWidth + top));
        window.scrollTo(0,rect);
        if(rect != pageWidth + top) {requestAnimationFrame(step)} else {location.hash = hash;}
      };
      return false;
    };
  };
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
  // NOTE: scrollspy
  var scrollSpy = debounce(function() {
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    var j = 0;
    for(j in menuList) {
      if(menuList[j] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', 'navigation__link');
        document.querySelector('a[href*=' + j + ']').setAttribute('class', 'navigation__link active');
      }
    }
  },40);
  window.addEventListener('scroll', scrollSpy);
}());
