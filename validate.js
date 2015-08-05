$(document).ready(function() {
	

	$('.bxslider').bxSlider({ 

		onSliderLoad: function(){
 		jQuery('video').trigger('play');
  		}

  	});

	var complete = screen.width;
	
	if (complete < 1024) {
		window.location.href="http://m.standbrightstudios.com";
	}
	
	$.validator.addMethod("phones", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		(phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)||
		 phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)||
		 phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)||
		 phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
		 );
	}, "Please specify a valid phone number");
	
	$.validator.addMethod("currency", function(value, element, param) {
	    var isParamString = typeof param === "string",
		symbol = isParamString ? param : param[0],
		soft = isParamString ? true : param[1],
		regex;
	
	    symbol = symbol.replace(/,/g, "");
	    symbol = soft ? symbol + "]" : symbol + "]?";
	    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
	    regex = new RegExp(regex);
	    return this.optional(element) || regex.test(value);
	
	}, "Please specify a valid currency");
	
	$("#contact_submit").validate({
			rules:{
				artistic_style:{
					required: true
				},
				video_category:{
					required: true
				},
				video_content:{
					required: true
				},
				person_name:{
					required: true,
					minlength: 2
				},
				company_name:{
					required: true,
					minlength: 2
				},
				company_number:{
					required: true,
					phones: true
				},
				company_email:{
					required: true,
					email: true
				},
				company_budget:{
					required: true,
					currency: ["$", false]
				},
				company_know:{
					required: true
				},				
				company_details:{
					required: true
				}
			},
			messages:{

				artistic_style: "Please Choose a style.",
				video_category: "Please Choose a category.",
				video_content: "Please Choose a type of content.",
				person_name: "Please provide a valid name",
				company_name: "Enter a valid Company Name",				
				company_number: "Valid # Required",
				company_email: "Valid Email Required",
				company_budget: "Valid Budget Required",
				company_know: "Please tell us how you know about us.",
				company_details: "Some details required. Please fill this out as much as possible."
			},	
			errorPlacement: function(error, element) {
				element.attr("placeholder",error.text());
			},
	});
	
	$("#form2").validate({
			rules:{
				mail:{
					required: true,
					email: true
				},
			},
			messages:{
				mail: "Valid Email Required",
			},			
			errorPlacement: function(error, element) {	
				element.attr("placeholder",error.text());
			},
	});
		
        $('#submit').ajaxForm(function() { 
			$('.template_contact_menus').val("");
			alert("Thank you for contacting us. Have a great day!");
        });

        $('#form2').ajaxForm(function() { 
		$('#mail').val("");
		alert("Thank you for subscribing. Have a nice day!");
        }); 	





});


setInterval(function () {
	var m_width = screen.width;
	var c_width = window.innerWidth;
	var b_height = screen.availHeight;

	$("html").css("min-width", m_width);
	$("body").css("min-width", m_width);

	if (m_width > c_width) {
		$("html").css("overflow-x", "scroll");
	}
	if (m_width == c_width) {
		$("html").css("overflow-x", "hidden");
	}      

	console.log($('.bxslider').css('transform'));

if (($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -7652, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -6692, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -6372, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -5732, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -5572, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -5436, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -5092, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -4580, 0)') ||
	($('.bxslider').css('transform') === 'matrix(1, 0, 0, 1, -4068, 0)')) {
  	      
     $( ".template_slide4_line").addClass("template_animations");
  	 $( ".template_slide4_list_services" ).fadeIn( 1500, function() {});

  	  }
}, 1);



setInterval(function () {

	var b_height = screen.height;
	var x = $('.template_icons_step_stones').offset().top;
	var y = x - b_height;

	if ( y < -200){
		$('.template_icons_step_stones').animate({'opacity':'1'},1000);
	}

	
}, 10);



