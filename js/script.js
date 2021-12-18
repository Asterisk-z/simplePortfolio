const words = ["A BACKEND", "AN ASTUTE", "A FULL-STACK"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			setTimeout(deletingEffect, 1500)
			return false;
		};
		timer = setTimeout(loopTyping, 100);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();


function writingName() {
	let name = ['O', 'L', 'A', 'N', 'G', ' ', 'D', 'A', 'N', 'I', 'E', 'L'];
	var writeName = function() {
		if (name.length > 0) {
			document.getElementById('name').innerHTML += name.shift();
		}
		timer = setTimeout(writeName, 300);
	};
	writeName();
}
writingName();



///////
///////
///////
var canvas;
var stage;
var imgSeq = new Image();       // The image for the sparkle animation
var sprite;                     // The animated sparkle template to clone
var fpsLabel;
var fader;                      // Semi fades the Background to give a tracing effect
var spkls;                      // Container for all the sparkles
function init() {
  // create a new stage and point it at our canvas:
  canvas = document.getElementById("testCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stage = new createjs.StageGL(canvas, {preserveBuffer:true, antialias:true});
  stage.autoClear = false;
  stage.setClearColor(0x089eca);
  
  // attach mouse handlers directly to the source canvas.
  // better than calling from canvas tag for cross browser compatibility:
  stage.addEventListener("stagemousemove", moveCanvas);
  stage.addEventListener("stagemousedown", clickCanvas);
  
  var img = new Image();
  img.crossOrigin="Anonymous";
  img.onload = imageLoaded;
}


init();

