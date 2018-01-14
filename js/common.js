$(document).ready(function() {
	// remove placeholder after click
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
 	});

	

	function updater(d, h, m, s) {
	  // День сброса - 5 августа 2017 года (и далее каждые три дня)
	  var baseTime = new Date(2017, 07, 8);
	  // Период сброса — 3 дня
	  var period = 2*24*60*60*1000;

	  function update() {
	    var cur = new Date();
	    // сколько осталось миллисекунд
	    var diff = period - (cur - baseTime) % period;
	    // сколько миллисекунд до конца секунды
	    var millis = diff % 1000;
	    diff = Math.floor(diff/1000);
	    // сколько секунд до конца минуты
	    var sec = diff % 60;
	    if(sec < 10) sec = "0"+sec;
	    diff = Math.floor(diff/60);
	    // сколько минут до конца часа
	    var min = diff % 60;
	    if(min < 10) min = "0"+min;
	    diff = Math.floor(diff/60);
	    // сколько часов до конца дня
	    var hours = diff % 24;
	    if(hours < 10) hours = "0"+hours;
	    var days = Math.floor(diff / 24);
	    d.innerHTML = days;
	    h.innerHTML = hours;
	    m.innerHTML = min;
	    s.innerHTML = sec;
	  
	    // следующий раз вызываем себя, когда закончится текущая секунда
	    setTimeout(update, millis);
	  }
	  setTimeout(update, 0);
	}
	updater(document.getElementById("days"),
	document.getElementById("hours"), document.getElementById("minutes"),
	document.getElementById("seconds"));

	$('.address span').click(function(){
		var address = this.dataset.address;
		var src = 'img/map_' + address + '.jpg';
		$('.map img').attr('src', src);
	});

	

	$('.scroll').click( function(){
	var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 800);
		}
		return false;
	});


	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});



	
	//slick carousel
	$('.photo_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.photo_next',
		prevArrow: '.photo_prev',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	$('.cert_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '.cert_next',
		prevArrow: '.cert_prev',
		dots: true,
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
			},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			}
		]
	});
	$('.rev_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.rev_next',
		prevArrow: '.rev_prev',
		dots: true,
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});

	//video player + button
	$('#mainVideo').click(function(){
		if (this.paused) {
			this.play();
			$('#videoButton').fadeOut('fast');
		} else {
			$('#videoButton').fadeIn('fast');
			this.pause();
		}
	});
	$('#videoButton').on('click', function(event) {
		event.preventDefault();
		$('#videoButton').fadeOut('fast');
		$('#mainVideo').get(0).play();
	});
	

	
	//validation
		var locationURL = window.location.search;
	if ( locationURL == "?p=179&lang=ua" ) {
		var validationName = "Обов'язково для заповнення";
		var validationNameMax = "Від 2 до 16 літер";
		var validationPhone = "Введіть вірний номер";
		var validationEmail = "Введіть вірний E-mail";
	}
	else {
		var validationName = "Обязательно для заполнения";
		var validationNameMax = "От 2 до 16 букв";
		var validationPhone = "Введите корректный номер";
		var validationEmail = "Введите корректный E-mail";
	}


	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#bottom_Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#bottom_Form2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service1Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service2Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service3Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service4Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service5Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#service6Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#system1Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#system2Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#system3Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#system4Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#system5Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#system6Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#system7Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#variant1Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#variant2Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#variant3Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#contactForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	


});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/