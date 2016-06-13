function Slider(selector, options) {
  'use strict';
  var __self = this;
  var sliderNode = document.querySelector(selector);
  var sliderElement = sliderNode.querySelector('.slider__elem');
  var sliderContainer = sliderNode.querySelector('.slider__container');
  var sliderShowPrev = sliderNode.querySelector('.slider__arrow--prev');
  var sliderShowNext = sliderNode.querySelector('.slider__arrow--next');
  var sliderPagination = sliderNode.querySelector('.slider__pagination');
  var slideDirection = options.direction || 'horizontal';
  var currentSlideIndex = options.currentSlide || 0;
  var totalImages = sliderContainer.children.length;

//events
  sliderShowPrev.onclick = function(e) {
    e.preventDefault();
    __self.showPrev();
    __self.__render();
  };
  sliderShowNext.onclick = function(e) {
    e.preventDefault();
    __self.showNext();
    __self.__render();
  };
  sliderPagination.onclick = function(e) {
    e.preventDefault();
    var link = e.target;
    if (link.tagName !== 'LI') { return; }
    currentSlideIndex = +link.dataset['item'];
    __self.changeActive();
    __self.__render();
  };

//RENDER
  this.showPrev = function() {
    if (currentSlideIndex === 0) {
      currentSlideIndex = totalImages - 1;
      __self.changeActive();
      return;
    }
    currentSlideIndex--;
    __self.changeActive();
  };
  this.showNext = function() {
    if (currentSlideIndex === totalImages - 1) {
      currentSlideIndex = 0;
      __self.changeActive();
      return;
    }
    currentSlideIndex++;
    __self.changeActive();
  };
  this.__render = function() {
    if (slideDirection === 'horizontal') {
      sliderElement.style.marginLeft = -(currentSlideIndex * sliderElement.offsetWidth) + 'px';
    } else if (slideDirection === 'vertical') {
      sliderElement.style.marginTop = -(currentSlideIndex * sliderElement.offsetHeight) + 'px';
    }
    // TODO: animationTime
  };

//PAGINATION
  this.changeActive = function () {
    for (var i = 0; i < totalImages; i++) {
      sliderPagination.children[i].classList.remove('active');
    }
    sliderPagination.children[currentSlideIndex].classList.add('active');
  };
  this.pagination = function() {
    for (var i = 0; i < totalImages; i++) {
      var paginationList = document.createElement('li');
      paginationList.className = 'slider__pagination-item';
      paginationList.setAttribute('data-item', i);
      sliderPagination.appendChild(paginationList);
    }
    sliderPagination.children[currentSlideIndex].classList.add('active');
  };



  this.__init = function() {
    if (slideDirection === 'vertical') {
      sliderContainer.style.display = 'block';
    }
    this.__render();
  };
  this.__init();
  this.pagination();
};
