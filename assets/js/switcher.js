jQuery(window).load(function() {
	/* demo */

	jQuery('body').append(
	"<div class='demo_navigation es-tr'>"+
		"<div class='demo_options'>"+
			"<!-- SKIN -->"+
			"<div class='nav_skin'>"+
				"<!--  Skins Colors -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Skins Colors</div>"+
					"<div class='demo-content demo-color clearfix'>"+

						"<div class='skin-icon' data-name='gnrl_color' data-value='default' data-value-2='fe9d68' style='background-color: #fe9d68;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='blue' data-value-2='0394f1' style='background-color: #0394f1;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='cyan' data-value-2='2997ab' style='background-color: #2997ab;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='green' data-value-2='7bc673' style='background-color: #7bc673;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='lactic' data-value-2='26bdef' style='background-color: #26bdef;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='pink' data-value-2='f1505b' style='background-color: #f1505b;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='purple' data-value-2='a085d3' style='background-color: #a085d3;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='red' data-value-2='d73b37' style='background-color: #d73b37;'></div>"+
						"<div class='skin-icon' data-name='gnrl_color' data-value='yellow' data-value-2='fec400' style='background-color: #fec400;'></div>"+

					"</div>"+
				"</div><hr>"+
				"<!--  End Skins Colors -->"+

				"<!--  Light Or Dark -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Light Or Dark</div>"+
					"<div class='demo-content demo-light'>"+

						"<div data-name='gnrl_light' data-value='light' style='background-color: #FFF;'></div>"+

						"<div data-name='gnrl_light' data-value='dark' style='background-color: #2d303c;'></div>"+

					"</div>"+
				"</div><hr>"+
				"<!--  End Light Or Dark -->"+

				"<!--  Layout -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Layout</div>"+
					"<div class='demo-content demo-layout'>"+

						"<div data-name='gnrl_layout' data-value='wide'>Wide</div>"+

						"<div data-name='gnrl_layout' data-value='boxed'>Boxed</div>"+

						"<div data-name='gnrl_layout' data-value='boxed2'>Boxed 2</div>"+

					"</div>"+
				"</div><hr>"+
				"<!--  End Layout -->"+

				"<!--  Patterns -->"+
				"<div class='gnrl_color pt_touch clearfix'>"+
					"<div class='demo-title'>Patterns</div>"+
					"<div class='demo-content demo-pattern'>"+

						"<div data-name='gnrl_pattern' data-value='bg1'><img alt='' src='assets/img/patterns/bg1.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg2'><img alt='' src='assets/img/patterns/bg2.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg3'><img alt='' src='assets/img/patterns/bg3.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg4'><img alt='' src='assets/img/patterns/bg4.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg5'><img alt='' src='assets/img/patterns/bg5.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg6'><img alt='' src='assets/img/patterns/bg6.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg7'><img alt='' src='assets/img/patterns/bg7.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg8'><img alt='' src='assets/img/patterns/bg8.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg9'><img alt='' src='assets/img/patterns/bg9.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg10'><img alt='' src='assets/img/patterns/bg10.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg11'><img alt='' src='assets/img/patterns/bg11.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg12'><img alt='' src='assets/img/patterns/bg12.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg13'><img alt='' src='assets/img/patterns/bg13.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg14'><img alt='' src='assets/img/patterns/bg14.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg15'><img alt='' src='assets/img/patterns/bg15.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg16'><img alt='' src='assets/img/patterns/bg16.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg17'><img alt='' src='assets/img/patterns/bg17.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg18'><img alt='' src='assets/img/patterns/bg18.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg19'><img alt='' src='assets/img/patterns/bg19.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg20'><img alt='' src='assets/img/patterns/bg20.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg21'><img alt='' src='assets/img/patterns/bg21.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg22'><img alt='' src='assets/img/patterns/bg22.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg23'><img alt='' src='assets/img/patterns/bg23.png'></div>"+
						"<div data-name='gnrl_pattern' data-value='bg24'><img alt='' src='assets/img/patterns/bg24.png'></div>"+

					"</div>"+
				"</div>"+
				"<!--  End Patterns -->"+

			"</div>"+
		"</div>"+

		"<div class='clearfix'></div>"+
		"<div class='push_options'><a class='show_hide'><i class='fa fa-cog'></i></a></div>"+
	"</div>");

	var emerald_gnrl_color=false;

	jQuery('.show_hide').click(function(){
		if ( jQuery('.push_options').hasClass('switcherToggle') )
			{
			jQuery('.push_options').removeClass('switcherToggle');
			jQuery('.demo_navigation').removeClass('opened');
		}else
		{
			jQuery('.push_options').addClass('switcherToggle');
			jQuery('.demo_navigation').addClass('opened');
		}
	});

	jQuery('.demo_navigation').click(function(e){
		e.stopPropagation();
	});
	jQuery('html').on( 'click', function (){
		jQuery('.push_options').removeClass('switcherToggle');
		jQuery('.demo_navigation').removeClass('opened');
	});
	jQuery(window).scroll(function() {
		jQuery('.push_options').removeClass('switcherToggle');
		jQuery('.demo_navigation').removeClass('opened');
	})

	// Pattern
	jQuery('div[data-name=gnrl_pattern]').click(function() {
		emerald_gnrl_gnrl_pattern = jQuery(this).attr("data-value");
		if(emerald_gnrl_gnrl_pattern!=false){
			pointer_pattern(emerald_gnrl_gnrl_pattern);
		}
	});

	// General Pattern
	function pointer_pattern(pattern_style){
		if (jQuery(".active-layout").attr("data-value") == "boxed" || jQuery(".active-layout").attr("data-value") == "boxed2") {
			jQuery("body").css("background","url(assets/img/patterns/"+pattern_style+".png) repeat");
		}
	}

	// Layout
	jQuery('div[data-name=gnrl_layout]').click(function() {
		jQuery("*").removeClass("active-layout");
		jQuery(this).addClass("active-layout");
		emerald_gnrl_layout = jQuery(this).attr("data-value");
		if(emerald_gnrl_layout!=false){
			pointer_layout(emerald_gnrl_layout);
		}
	});

	// General Layout
	function pointer_layout(layout_style){
		if (layout_style == "wide") {
			jQuery("body").removeClass("bboxed");
			jQuery("#entire").removeClass("boxed").removeClass("boxed-2");
			jQuery(window).resize();
		}else if (layout_style == "boxed") {
			jQuery("body").addClass("bboxed");
			jQuery("#entire").addClass("boxed").removeClass("boxed-2");
			jQuery(window).resize();
		}else if (layout_style == "boxed2") {
			jQuery("body").addClass("bboxed");
			jQuery("#entire").removeClass("boxed").addClass("boxed-2");
			jQuery(window).resize();
		}
	}

	// Color
	jQuery('div[data-name=gnrl_color]').click(function() {
		emerald_gnrl_color = jQuery(this).attr("data-value");
		emerald_gnrl_color_2 = jQuery(this).attr("data-value-2");
		if(emerald_gnrl_color!=false){
			pointer_color(emerald_gnrl_color,emerald_gnrl_color_2);
		}
	});

	// General Color
	function pointer_color(color_style,color_style_2){
		var theme_icons = jQuery(".features-section .icon, .add-courses").find("img");
		if (color_style != "default") {
			jQuery(".logo-container a img").attr("src","assets/img/logo@2x-"+color_style+".png");
			jQuery(".skin_link").remove();
			theme_icons.attr('src', function(i, src){
				return 'assets/img/icons/'+color_style+'/' + src.split("/").pop();
			});
		}else if (color_style == "default") {
			jQuery(".logo-container a img").attr("src","assets/img/logo@2x.png");
			jQuery(".skin_link").remove();
			theme_icons.attr('src', function(i, src){
				return 'assets/img/icons/' + src.split("/").pop();
			});
		}
		jQuery('head').append('<link class="skin_link" rel="stylesheet" href="assets/css/skin/'+color_style+'.css">');
	}

	// Light Or Dark
	jQuery('div[data-name=gnrl_light]').click(function() {
		emerald_gnrl_light = jQuery(this).attr("data-value");
		if(emerald_gnrl_light!=false){
			pointer_light(emerald_gnrl_light);
		}
	});

	// General Light Or Dark
	function pointer_light(light_style){
		if (light_style == "dark") {
			jQuery("body").addClass("dark");
		}else {
			jQuery("body").removeClass("dark");
		}
	}

});
