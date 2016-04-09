'use strict'
 function Main(){
  self = this;
  self.initMap = function(){

         // When the window has finished loading create our google map below
         google.maps.event.addDomListener(window, 'load', init);
  };

  self.initPreloader = function(){
        $(window).load(function () {
            // will first fade out the loading animation
            $("#preloader").fadeOut();
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(1000).fadeOut("slow");
        })
  };

  self.initAccordion = function(){


          	var Accordion = function(el, multiple) {
          		this.el = el || {};
          		this.multiple = multiple || false;

          		// Variables privadas
          		var links = this.el.find('.link');
          		// Evento
          		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
          	}

          	Accordion.prototype.dropdown = function(e) {
          		var $el = e.data.el;
          		var	$this = $(this);
          		var	$next = $this.next();

          		$next.slideToggle();
          		$this.parent().toggleClass('open');

          		if (!e.data.multiple) {
          			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
          		};
          	}

          	var accordion = new Accordion($('#accordion'), false);

  };

  self.init = function(){
    self.initPreloader();
    self.initMap();
    self.initAccordion();
  }




 }
