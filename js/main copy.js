$(document).ready(function() {

	// timer function within another function to prevent it from starting until we call it 	
	function startTimer() {
		var time = $('#time'); // creates the variable for #time in the HTML
		var timeLeft = 60; // starts the timer at 60 seconds
		
		function deductTime() {			
			if (timeLeft < 10) {
				timeLeft = 0;
			} else {
				timeLeft = timeLeft - 10;
			}
		}
		
		var timer = setInterval( function() {			
			timeLeft--; // descreases the time by 1 second
			time.text(timeLeft); // outputs the current time
						
			if (timeLeft <= 0) {
				timeLeft = 0;
				time.text(0);
				clearInterval(timer); // stops the timer once it reaches 0
			}	
			
			console.log(timeLeft);		
		}, 1000);
		
		$('#question button').on('click', function(event) {
			event.preventDefault();
			
			deductTime();
			
			$('#question .alert').attr('style', 'display: block;');
			$('#question .alert').addClass('alert-danger');
			$('#question .alert').text('Wrong! Try Again');
		});
		
		var questions = [
			{
				title: "Commonly used data types DO NOT include:",
				choices: ["strings", "booleans", "alerts", "numbers"],
				answer: "alerts"
			},
			{
				title: "The condition in an if / else statement is enclosed within ____.",
				choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
				answer: "parentheses"
			},
			{
				title: "Arrays in JavaScript can be used to store ____.",
				choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
				answer: "all of the above"
			},
			{
				title: "String values must be enclosed within ____ when being assigned to variables.",
				choices: ["commas", "curly brackets", "quotes", "parentheses"],
				answer: "quotes"
			},
			{
				title: "A very useful tool used during development and debugging for printing content to the debugger is:",
				choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
				answer: "console.log"
			}
		];
		
		$('#question h2').text(questions[0].title);
	    $('#question #choice0').text(questions[0].choices[0]);
	    $('#question #choice1').text(questions[0].choices[1]);
	    $('#question #choice2').text(questions[0].choices[2]);
	    $('#question #choice3').text(questions[0].choices[3]);
	    
			
	};
	
/*
		function rotateQuestions() {
		
		for (i = 0; i < questions.length; i++) {
			
			for (c = 0; c < questions[i].choices.length; c++) {
				return questions[i].choices[c];
			}
			
			if (questions[i].choices[c] === questions[i].answer) {
				console.log('asdasdf');
			}
			
		}
*/
		
/*
		$('#question h2').text(questions[0].title);
	    $('#question #choice0').text(questions[0].choices[0]);
	    $('#question #choice1').text(questions[0].choices[1]);
	    $('#question #choice2').text(questions[0].choices[2]);
	    $('#question #choice3').text(questions[0].choices[3]);

			
			if ($('button').value === questions[0].answer) {
				
				$('#question button').on('click', function(event) {
					event.preventDefault();
					console.log('yessss');
				});
				
			} else {
				
				$('#question button').on('click', function(event) {
					event.preventDefault();
					console.log('nope');
				});
				
			}
*/

    
/*
	    for (var i = 0; i < questions.length; i++) {
		    
		    $('#question h2').text(questions[i].title);
		    $('#question #choice0').text('1. ' + questions[i].choices[0]);
		    $('#question #choice1').text('2. ' + questions[i].choices[1]);
		    $('#question #choice2').text('3. ' + questions[i].choices[2]);
		    $('#question #choice3').text('4. ' + questions[i].choices[3]);
		    
	    }
*/

		
// 	};
	
	// circle through questions

		// display first quesiton from the list of questions
		
		// if wrong answer is selected, alert "Wrong!"
		
		// if wrong answer is selected, deduct 10 seconds from timer
	
		// if correct answer is selected, alert "Correct!"
		
		// if correct answer is selected, display next question	
	
	
	
	
	
	
	
	

// navigate through the single HTML file
	// hide quiz questions and summary and only show intro – done in CSS
	// on start button click, hide intro and show first question
	
	var main = $('#main');
	var quiz = $('#quiz');
	var summary = $('#summary');
	
	$('#main button').on('click', function(event) {
		event.preventDefault();
		
		main.attr('style', 'display: none;');
		quiz.attr('style', 'display: block;');
		
		startTimer();

	});
	
/*
	$('#question button').on('click', function(event) {
		event.preventDefault();
		
		deductTime();
	});
*/
	// after all questions have been answered, hide questions and show summary
	
// 4. local storage

	// store name and score when submit score button is clicked
});
