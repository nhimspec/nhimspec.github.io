function initMap() {
	var lat = 16.4741021,
       	lng = 107.5676368,
       	map = new google.maps.Map(document.getElementById('map'), {
		  	center: {lat: lat, lng: lng},
		  	zoom: 15
		})
       	myLatlng = new google.maps.LatLng( lat, lng ),
			marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: {
	        	url: 'img/marker.png',
	        	scaledSize: new google.maps.Size(26, 42)
	    	}
		});
}	
(function($) {
  "use strict";
	//------------------------------------- Waiting for the entire site to load ------------------------------------------------//
	jQuery(window).on('load', function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(200).fadeOut("slow"); 
	});

	$(document).ready(function(){
		//------------------------------------- Site slider ------------------------------------------------//
		$("#testimonial-carousel").owlCarousel({
		    navigation : false,
		    slideSpeed : 300,
		    paginationSpeed : 400,      
		    responsiveRefreshRate : 200,
		    responsiveBaseWidth: window,
		    pagination: true,
		    singleItem: true   
		});
		  
		$("#block-slider").owlCarousel({
		    navigation : false,
		    slideSpeed : 300,
		    paginationSpeed : 400,      
		    responsiveRefreshRate : 200,
		    responsiveBaseWidth: window,
		    pagination: false,
		    singleItem: true,
		    navigation:true,
		    navigationText: ["<span class='icon-left-open-big'></span>","<span class='icon-right-open-big'></span>"]  
		});
		//------------------------------------- End site slider------------------------------------------------//
		//------------------------------------- Skills percentage setup------------------------------------------------//
		$(".percentage").each(function(){
	          var  width= $(this).text();
	          $(this).css("width", width).empty();
		});		
		//------------------------------------- End skills percentage setup------------------------------------------------//
		//------------------------------------- Portfolio setup------------------------------------------------//

		$('.box').magnificPopup({
			  type: 'image',
			fixedContentPos: false,
			fixedBgPos: false,
			mainClass: 'mfp-no-margins mfp-with-zoom',
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300
			}
		});

		$('.popup-youtube, .popup-vimeo').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

		/*Filtred portfolio*/
		$('.filter li a').on("click", function(e){
			
				e.preventDefault();
				$(this).addClass('active');
				$(this).parent().siblings().find('a').removeClass('active');

		        var filters = $(this).attr('data-filter');
		        $(this).closest('.works').find('.item').removeClass('disable');

		        if (filters !== 'all') {
		        var selected =  $(this).closest('.works').find('.item');
		        
		        for(var i = 0; i < selected.length; i++){
		        
		        if (!selected.eq(i).hasClass(filters)) {
		                    selected.eq(i).addClass('disable');
						}
		        }	   
		   }
		});
		//------------------------------------- End portfolio setup------------------------------------------------//
		//---------------------------------- Toogle switcher-----------------------------------------//
		$('.toggle').click(function(e) {
	        e.preventDefault();
	        var styler = $('.styler');
	        console.log(styler.css('left'));
	        if (styler.css('left') === '-278px') {
	            $('.styler').animate({
	                left: '0px'
	            });
	        } else {
	            $('.styler').animate({
	                left: '-278px'
	            });
	        }
	    });
		//---------------------------------- End toogle switcher-----------------------------------------//
	});
})(jQuery);