//JavaScript Document
var goalScoreDisplay = document.getElementById('goalScore'),
			yourScoreDisplay = document.getElementById('yourScore'),
			goalScore, yourScore,
			button1Display = document.getElementById("button1"),
			button2Display = document.getElementById("button2"),
			button3Display = document.getElementById("button3"),
			button4Display = document.getElementById("button4"),
			button1, button2, button3, button4,
			button1Op, button2Op, button3Op, button4Op;
			
			function setGame() {
				$('#mysteryButtonBlocker').fadeOut(500, 'swing', function() {document.getElementById('mysteryButtonBlocker').className = 'notActive';});
				goalScore = Math.floor((Math.random() * 100) + 1);
				yourScore = 0;
				goalScoreDisplay.innerHTML = "Goal Score: " + goalScore.toString();
				yourScoreDisplay.innerHTML = "Your Score: " + yourScore.toString();
				button1 = Math.floor((Math.random() * 9) + 2);
				do{
				button2 = Math.floor((Math.random() * 9) + 2);
				}while(button2 == button1);
				do{
				button3 = Math.floor((Math.random() * 9) + 2);
				}while(button3 == button1 || button3 == button2);
				do{
				button4 = Math.floor((Math.random() * 9) + 2);
				}while(button4 == button1 || button4 == button2 || button4 == button3);
				button1Op = Math.floor(Math.random() * 3);
				do {
				button2Op = Math.floor(Math.random() * 3);
				}while(button2Op == button1Op);
				do {
				button3Op = Math.floor(Math.random() * 3);
				}while(button3Op == button1Op || button3Op == button2Op);
				button4Op = Math.floor(Math.random() * 2);
				console.log ("button1: ", button1);
				console.log ("button2: ", button2);
				console.log ("button3: ", button3);
				console.log ("button4: ", button4);
				console.log ("button1Op: ", button1Op);
				console.log ("button2Op: ", button2Op);
				console.log ("button3Op: ", button3Op);
				console.log ("button4Op: ", button4Op);
			}
			
			function Update() {
				yourScoreDisplay.innerHTML = "Your Score: " + yourScore.toString();
				if (yourScore == goalScore) {
					gameover();	
				}
			}
			
			function gameover() {
				goalScoreDisplay.innerHTML = "YOU WIN";
				document.getElementById('mysteryButtonBlocker').className = 'active';
				$('#mysteryButtonBlocker').fadeIn(20, 'swing')
			}
			
			function resetGoal() {
				$('#boardWrapper').fadeOut(1000, 'swing', function() {
					document.getElementById('mysteryButtonBlocker').className= 'active';
					$('#mysteryButtonBlocker').fadeIn(10, 'swing');
					$('#boardWrapper').fadeIn(1000, 'swing')});
			}
			
			function clearScore() {
				yourScore = 0;
				yourScoreDisplay.innerHTML = "Your Score: " + yourScore.toString();
			}
			
			function button1Click() {
				switch (button1Op) {
					case 0: yourScore = yourScore + button1;	
					break;
					case 1: yourScore = yourScore - button1;	
					break;
					case 2: yourScore = yourScore * button1;	
					break;
				}
				$('#button1').fadeOut(20, 'swing', function() { $('#button1').fadeIn(20, 'swing')});
				Update();
			}
			function button2Click() {
				switch (button2Op) {
					case 0: yourScore = yourScore + button2;	
					break;
					case 1: yourScore = yourScore - button2;	
					break;
					case 2: yourScore = yourScore * button2;	
					break;
				}
				$('#button2').fadeOut(20, 'swing', function() { $('#button2').fadeIn(20, 'swing')});
				Update();
			}
			function button3Click() {
				switch (button3Op) {
					case 0: yourScore = yourScore + button3;	
					break;
					case 1: yourScore = yourScore - button3;	
					break;
					case 2: yourScore = yourScore * button3;	
					break;
				}
				$('#button3').fadeOut(20, 'swing', function() { $('#button3').fadeIn(20, 'swing')});
				Update();
			}
			function button4Click() {
				switch (button4Op) {
					case 0: yourScore = yourScore + button4;	
					break;
					case 1: yourScore = yourScore - button4;	
					break;
					case 2: yourScore = yourScore * button4;	
					break;
				}
				$('#button4').fadeOut(20, 'swing', function() { $('#button4').fadeIn(20, 'swing')});
				Update();
			}