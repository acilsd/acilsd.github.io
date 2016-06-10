//simple slider for fixed-width-grid with some options
function Slider(selector, options) {
  'use strict';
  var __self = this;
//Selecting DOM nodes
  var sliderNode = document.querySelector(selector),
      sliderImgNode = sliderNode.querySelector('.slider__images-wrap'),
      prevSliderNode = sliderNode.querySelector('.slider__pager_previous'),
      nextSliderNode = sliderNode.querySelector('.slider__pager_next'),
      paginationNode = sliderNode.querySelector('.slider__pagination');

//options
  var currentSlide = options.currentSlide || 0,
      imagesCount = sliderImgNode.children.length,
      slideSize = sliderImgNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'],
      alignDir = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';


//slider logic
  this.nextSlide = function() {
    if(currentSlide === imagesCount - 1) {
      currentSlide = 0;
      return;
    }
    currentSlide++;
  };

  this.prevSlide = function() {
    if(currentSlide === 0) {
      currentSlide = imagesCount - 1;
      return;
    }
    currentSlide--;
  };

//rendering
  this.__render = function() {
    sliderImgNode.style[alignDir] = -(currentSlide * slideSize) + 'px';
    paginationNode.querySelector('.active').classList.remove('active');
    paginationNode.children[currentSlide].querySelector('a').classList.add('active');
  };

//initialize
  nextSliderNode.onclick = function(e) {
    e.preventDefault();
    __self.nextSlide();
    __self.__render();
  };

  prevSliderNode.onclick = function(e) {
    e.preventDefault();
    __self.prevSlide();
    __self.__render();
  };

  //pagination
  paginationNode.onclick = function(e) {
    e.preventDefault();
    var link = e.target;
    if(link.tagName !== 'A') {
      return;
    }
    currentSlide = +link.dataset['slider__item'];
    __self.__render();
  };

//default initialization
  this.__init = function() {
    if (options.direction === 'vertical') {
      sliderImgNode.style.whiteSpace = 'normal';
    }
    this.__render();
  };

this.__init();
};
