(function() {
// 	c9dfe2
//	b3c8df
//	d9d9d9
//	e9eaeb
//	1195d3 
	if(window.location.href == "http://192.168.33.10/29six/") {
		window.addEventListener('load', function(){
			var canvas = document.getElementById('particles');
			var ctx = canvas.getContext('2d');
			
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
			
			console.log(width, height);
			
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
	}

	
})();