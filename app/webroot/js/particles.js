(function() {
// 	c9dfe2
//	b3c8df
//	d9d9d9
//	e9eaeb
//	1195d3 
	if(window.location.href == "http://29six.com.au/") {
		window.addEventListener('load', function(){
			var canvas = document.getElementById('particles');
			var ctx = canvas.getContext('2d');

			var canvas1 = document.getElementById('bannertxt1');
			var canvas2 = document.getElementById('bannertxt2');
			var canvas3 = document.getElementById('bannertxt3');
			var canvas4 = document.getElementById('bannertxt4');
			var canvas5 = document.getElementById('bannertxt5');
			var marqueetxt1 = canvas1.getContext('2d');
			var marqueetxt2 = canvas2.getContext('2d');
			var marqueetxt3 = canvas3.getContext('2d');
			var marqueetxt4 = canvas4.getContext('2d');
			var marqueetxt5 = canvas5.getContext('2d');

			var txt1 = "Brand New Advertising and Marketing Team at your service";
			var txt2 = "Take the Next Step in getting a fair advantage on your Business needs";
			var txt3 = "E-Commerce Systems that is onpar with competition";
			var txt4 = "We help businesses with more advance technologies";
			var txt5 = "Practical System Designs that create a better selling point";

			marqueetxt1.font = "14px Arial";
			marqueetxt2.font = "14px Arial";
			marqueetxt3.font = "14px Arial";
			marqueetxt4.font = "14px Arial";
			marqueetxt5.font = "14px Arial";
			marqueetxt1.fillStyle = "#a2a2a2";
			marqueetxt2.fillStyle = "#a2a2a2";
			marqueetxt3.fillStyle = "#a2a2a2";
			marqueetxt4.fillStyle = "#a2a2a2";
			marqueetxt5.fillStyle = "#a2a2a2";

			marqueetxt1.width = marqueetxt1.measureText(txt1).width;
			marqueetxt2.width = marqueetxt2.measureText(txt2).width;
			marqueetxt3.width = marqueetxt3.measureText(txt3).width;
			marqueetxt4.width = marqueetxt4.measureText(txt4).width;
			marqueetxt4.width = marqueetxt5.measureText(txt5).width;

			marqueetxt1.random = randomTextLoc(marqueetxt1.width);
			marqueetxt2.random = randomTextLoc(marqueetxt2.width);
			marqueetxt3.random = randomTextLoc(marqueetxt3.width);
			marqueetxt4.random = randomTextLoc(marqueetxt4.width);
			marqueetxt5.random = randomTextLoc(marqueetxt5.width);

			function randomTextLoc(txtwidth) {
				var randomNum = 2;
				return randomNum = Math.round(((randomNum * txtwidth * Math.random())/2));
			}

			function runText(randomVal, marqueeObj, txtObj, num, speed) {
				var newIncrement = randomVal;
				var mtimer1 = setInterval(function() {
					newIncrement = newIncrement + speed;
					if(newIncrement > 788) {
						newIncrement = -marqueeObj.width;
					}
					marqueeObj.clearRect(0, 0, 788, 400);
					marqueeObj.fillText(txtObj, newIncrement, 50);

				}, 20)
			}
			(marqueetxt1.random)?runText(marqueetxt1.random, marqueetxt1, txt1, 1, 0.3):randomTextLoc(marqueetxt1.width);
			(marqueetxt2.random)?runText(marqueetxt2.random, marqueetxt2, txt2, 2, 1):randomTextLoc(marqueetxt2.width);
			(marqueetxt3.random)?runText(marqueetxt3.random, marqueetxt3, txt3, 3, 0.57):randomTextLoc(marqueetxt3.width);
			(marqueetxt4.random)?runText(marqueetxt4.random, marqueetxt4, txt4, 4, 0.7):randomTextLoc(marqueetxt4.width);
			(marqueetxt5.random)?runText(marqueetxt5.random, marqueetxt5, txt5, 5, 0.3):randomTextLoc(marqueetxt5.width);


			var NUM_PARTICLES = 6;	
			var points = [],
				width = canvas.width,
				height = canvas.height,
				intsy;
			
			var gravity = .15;
			var wind = .0;
			
			var emitter = { x: randBtwn(0, width), y: randBtwn(0, height) };
			
			function randBtwn(min, max) {
				return (min + (max - min) * Math.random())/2;
			}
			
			function initPoint() {	
				var p = {};
				p.x  = emitter.x + randBtwn(0, 600);
				p.y  = emitter.y + randBtwn(0, 600);
				p.vY = randBtwn(-height/300, height/300);
				p.vX = randBtwn(-width/300, width/300);
				p.radius = randBtwn(17, 26);
				return p;
			}
			
			function addPoint() {
				if(points.length < NUM_PARTICLES) {
					points.push(initPoint());
				}
			}

			var circRadius = 4;//pix
			
			function draw() {
				
				ctx.clearRect(0, 0, width, height);
				var point;
				var i, j;
				var  ptCons = new Array(points.length);
				
				for(i = 0; i < points.length; i++) {
					ptCons[i] = new Array(points.length);
					
					for(j = 0; j < points.length; j++) {
						ptCons[i][j] = 0;				
					}
				}

				for(i = 0; i < points.length; i++) {
					point = points[i];

					ctx.beginPath();
					
					points.forEach(function(pt, j){
						ctx.moveTo(point.x, point.y);
						ctx.lineTo(pt.x, pt.y);
						ctx.strokeStyle = '#d9d9d9';
						ptCons[i][j] = 1;
						ptCons[j][i] = 1;
					});	
					ctx.stroke();
					
					ctx.beginPath();
					ctx.arc(point.x, point.y, point.radius, 0, 2*Math.PI);
					ctx.fillStyle = '#d9d9d9';
					ctx.fill();
				}


			}

			
			function move()
			{
				points.forEach(function(point)
				{
					point.x = (point.x + point.vX) % width;
					point.y = (point.y + point.vY) % height;
					
					if(point.x < 0)
						point.x = width;
						
					if(point.y < 0)
						point.y = height;
							
				});
			}
			
			

			var start = new Date();
			points = [];
			window.clearInterval(intsy);
			intsy = window.setInterval(function(){
					addPoint();
					move(new Date() - start); 
					draw();
			}, 1000/30);
		}, false);






		function text() {	

			// txt1 = "Make a noise";
			// txt2 = "Get an advantage on your business";
			// txt3 = "E-Commerce System that make you go WOW";
			// txt4 = "Our Solutions came in packages";

			//clearInterval(waitForIt);

			var canvas = document.getElementById('particles');
			var ctx = canvas.getContext('2d');

			if (ctx){   
					
				var maxPos = 603, increPos = 0;

				var img = new Image();
				img.onload = function () {

					var i = (-190);

					var helloTimer = setInterval(function(){
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						i = parseInt(i) + 24;
						if(i<maxPos && finSaidInit != 1) {
							ctx.drawImage(img, 0, 0, 30, 27, i, 0, 60, 40);
						} else {
							ctx.drawImage(img, 0, 0, 30, 27, maxPos, 0, 60, 40);
							finSaidInit = 1;
							clearInterval(helloTimer);
						}

					}, 9000/700);
						
				}
				img.src = "http://29six.com.au/app/webroot/img/29six-hello.png";
				
			} else {   
			   //canvas-unsupported code here 
			}

		}



	}

	
})();
