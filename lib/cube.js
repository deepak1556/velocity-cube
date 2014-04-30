$.fn.velocity.defaults.easing = "easeInOutSine";

/* Randomly generate an integer between two numbers. */
function r (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
var cubesCount = 175,
	cubesHtml = "",
	$cubes;

for (var i = 0; i < cubesCount; i++) {
	cubesHtml += "<div class='smallcube cube'><div class='face'></div><div class='face'></div><div class='face'></div><div class='face'></div><div class='face'></div><div class='face'></div></div>";
}

$cubes = $(cubesHtml);

/*****************
    Animation
*****************/

var $container = $("#container");

var screenWidth = window.screen.availWidth,
	screenHeight = window.screen.availHeight,
	chromeHeight = screenHeight - document.documentElement.clientHeight;

var translateZMin = -725,
	translateZMax = 600;

$container
	.css("perspective-origin", screenWidth/2 + "px " + ((screenHeight * 0.45) - chromeHeight) + "px")
	.velocity({ perspective: [ 215, 50 ], rotateZ: [ 20, 0 ], opacity: [ 0.85, 0.55 ] }, { duration: 800, loop: 2, delay: 3250 });

$cubes.css("boxShadow", "0px 0px 4px 0px #4bc2f1");

$cubes
	.velocity({ 
		translateX: [ 
			function() { return "+=" + r(-screenWidth/2.5, screenWidth/2.5) },
			function() { return r(0, screenWidth) }
		],
		translateY: [
			function() { return "+=" + r(-screenHeight/2.75, screenHeight/2.75) },
			function() { return r(0, screenHeight) }
		],
		translateZ: [
			function() { return "+=" + r(translateZMin, translateZMax) },
			function() { return r(translateZMin, translateZMax) }
		],
		opacity: [ 
			function() { return Math.random() },
			function() { return Math.random() + 0.1 }
		]
	}, { duration: 7000, loop: 2 })
	.velocity("reverse", { easing: "easeOutQuad" })
	.appendTo($container);