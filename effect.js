$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});


		 $('#play, #bannar_coming, #balloons_flying, #cake_fadein, #light_candle, #wish_message, #show_images, #story').hide();

	$('#turn_on').click(function () {
  showCelebrationEffects();

  // Cracked sky reveal
  $('#cracked-sky').fadeIn(500, function () {
    $('#crack-message').addClass('active');
  });

  // Add bulb glow and background after short delay
  setTimeout(() => {
    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('body').addClass('peach');
  }, 2000);

  // Hide cracked sky and continue sequence
  setTimeout(() => {
    $('#cracked-sky').fadeOut(500);
    $('#turn_on').fadeOut('slow').delay(1000).promise().done(function () {
      $('#play').fadeIn('slow');
    });
  }, 4000);
});

	$('#play').click(function(){
		showCelebrationEffects();
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		showCelebrationEffects();
  $('.bannar').addClass('bannar-come');
  $(this).fadeOut('slow').delay(2000).promise().done(function(){
    $('#balloons_flying').fadeIn('slow');
  });
});


	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		showCelebrationEffects();
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
	vw = $(window).width()/2;

	$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
	$('#b1').attr('id','b11');
	$('#b2').attr('id','b22');
	$('#b3').attr('id','b33');
	$('#b4').attr('id','b44');
	$('#b5').attr('id','b55');
	$('#b6').attr('id','b66');
	$('#b7').attr('id','b77');

	$('#b11').animate({top:240, left: vw-350},500);
	$('#b22').animate({top:240, left: vw-250},500);
	$('#b33').animate({top:240, left: vw-150},500);
	$('#b44').animate({top:240, left: vw-50},500);
	$('#b55').animate({top:240, left: vw+50},500);
	$('#b66').animate({top:240, left: vw+150},500);
	$('#b77').animate({top:240, left: vw+250},500);

	$('.balloons').css('opacity','0.9');
	$('.balloons h2').fadeIn(3000);
	$(this).fadeOut('slow').delay(3000).promise().done(function(){
		$('#show_images').fadeIn('slow'); // ✅ Add this
	});
});

	
	$('#story').click(function(){
  showCelebrationEffects();
  
  // 👇 ADD THIS LINE to hide the image gallery
  $('#imageGallery').fadeOut('slow');

  $(this).fadeOut('slow');
  $('.cake').fadeOut('fast').promise().done(function(){
    $('.message').fadeIn('slow');
  });

  var i;

  function msgLoop(i) {
    $("p:nth-child("+i+")").fadeOut('slow').delay(5500).promise().done(function(){
      i = i + 1;
      $("p:nth-child("+i+")").fadeIn('slow').delay(2500);
      if (i == 50) {
        $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
          $('.cake').fadeIn('fast');
        });
      } else {
        msgLoop(i);
      }
    });
  }

  msgLoop(0);
});

});

$('#show_images').click(function () {
  // Hide all main elements
  $('.cake, .message, .balloons, .bannar, .balloon-border, .fuego, #bannar_coming, #balloons_flying, #cake_fadein, #light_candle, #wish_message, #turn_on, #play, #show_images, #story').hide();

  // Show the container that holds bulbs (if it's separate)
  $('.container').fadeIn(); // optional if your lights are inside this

  // Keep background lights (glow) active
  $('body').removeClass().addClass('peach-after');

  // Re-add bulb glow classes (in case they were removed)
  $('#bulb_yellow').addClass('bulb-glow-yellow bulb-glow-yellow-after');
  $('#bulb_red').addClass('bulb-glow-red bulb-glow-red-after');
  $('#bulb_blue').addClass('bulb-glow-blue bulb-glow-blue-after');
  $('#bulb_green').addClass('bulb-glow-green bulb-glow-green-after');
  $('#bulb_pink').addClass('bulb-glow-pink bulb-glow-pink-after');
  $('#bulb_orange').addClass('bulb-glow-orange bulb-glow-orange-after');

  // Show the image gallery
  $('#imageGallery').fadeIn(1000);

  // Start visual effects
  startConfetti();
  startEmojiRain();

  // Show the story button after a delay
  setTimeout(() => {
    $('#story').fadeIn(1000);
    startFireworks();
  }, 2000);
});




// 🎊 Confetti
function startConfetti() {
  confetti({
    particleCount: 200,
    spread: 180,
    origin: { y: 0.6 }
  });
}

// 💕 Emoji Rain
function startEmojiRain() {
  const emojiList = ["💖", "🎂", "🎉", "🌟", "💕"];
  for (let i = 0; i < 30; i++) {
    const span = document.createElement("span");
    span.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".emoji-rain").appendChild(span);
    setTimeout(() => span.remove(), 5000);
  }
}

// 🎆 Fireworks
function startFireworks() {
  const container = document.getElementById("fireworksCanvas");
  const fireworks = new Fireworks.default(container, {
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    rocketsPoint: 50,
    speed: 2,
    acceleration: 1.05,
    friction: 0.98,
    gravity: 1,
    particles: 50,
    trace: 3,
    explosion: 5,
  });
  fireworks.start();
  setTimeout(() => fireworks.stop(), 5000);
}


function showCelebrationEffects() {
  startConfetti();
  startEmojiRain();
}


//alert('hello');