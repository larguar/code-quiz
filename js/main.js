function startTimer() {
	var time = document.querySelector('#time'); // creates the variable for #time in the HTML
	var timeLeft = 60; // starts the timer at 60 seconds
	
	function deductTime() {			
		if (timeLeft < 10) {
			timeLeft = 0;
		} else {
			timeLeft = timeLeft - 10;
		}
	};
	
	function wrongAnswer(event) {		
		console.log('nooooo');
		deductTime();
		
		validation.setAttribute('style', 'display: block;');
	};
	
	var timer = setInterval( function() {			
		timeLeft--; // descreases the time by 1 second
		time.textContent = timeLeft; // outputs the current time
					
		if (timeLeft <= 0) {
			timeLeft = 0;
			time.textContent = 0;
			clearInterval(timer); // stops the timer once it reaches 0
		}	
		
		//console.log(timeLeft);		
	}, 1000);
	
	var questionOutput = document.querySelector('#question h2');
	var buttonOption1 = document.querySelector('button#choice0');
	var buttonOption2 = document.querySelector('button#choice1');
	var buttonOption3 = document.querySelector('button#choice2');
	var buttonOption4 = document.querySelector('button#choice3');
	var validation = document.querySelector('#question .alert');
		
	var questions = [
		{
			title: 'Commonly used data types DO NOT include:',
			choices: ['strings', 'booleans', 'alerts', 'numbers'],
			answer: 'alerts'
		},
		{
			title: 'The condition in an if / else statement is enclosed within ____.',
			choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
			answer: 'parentheses'
		},
/*
		{
			title: 'Arrays in JavaScript can be used to store ____.',
			choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
			answer: 'all of the above'
		},
*/
		{
			title: 'Commonly used data types DO NOT include:',
			choices: ['strings', 'booleans', 'alerts', 'numbers'],
			answer: 'alerts'
		},
		{
			title: 'String values must be enclosed within ____ when being assigned to variables.',
			choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
			answer: 'quotes'
		},
/*
		{
			title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
			choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
			answer: 'console.log'
		}
*/
		{
			title: 'Commonly used data types DO NOT include:',
			choices: ['strings', 'booleans', 'alerts', 'numbers'],
			answer: 'alerts'
		}
	];
	
	function question1() {		
		
		validation.setAttribute('style', 'display: none;');
					
		questionOutput.textContent = questions[0].title;
		buttonOption1.textContent = questions[0].choices[0];
		buttonOption2.textContent = questions[0].choices[1];
		buttonOption3.textContent = questions[0].choices[2];
		buttonOption4.textContent = questions[0].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[0].choices[0] === questions[0].answer) {
				question2();
			} else {
				wrongAnswer();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[0].choices[1] === questions[0].answer) {
				question2();
			} else {
				wrongAnswer();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[0].choices[2] === questions[0].answer) {
				question2();
			} else {
				wrongAnswer();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[0].choices[3] === questions[0].answer) {
				question2();
			} else {
				wrongAnswer();
			}
		});
		
	};
	
	function question2() {	
		
		validation.setAttribute('style', 'display: none;');	
				
		questionOutput.textContent = questions[1].title;
		buttonOption1.textContent = questions[1].choices[0];
		buttonOption2.textContent = questions[1].choices[1];
		buttonOption3.textContent = questions[1].choices[2];
		buttonOption4.textContent = questions[1].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[1].choices[0] !== questions[1].answer) {
				wrongAnswer();
			} else {
				question3();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[1].choices[1] !== questions[1].answer) {
				wrongAnswer();
			} else {
				question3();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[1].choices[2] !== questions[1].answer) {
				wrongAnswer();
			} else {
				question3();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[1].choices[3] !== questions[1].answer) {
				wrongAnswer();
			} else {
				question3();
			}
		});
		
	};
	
	function question3() {	
		
		validation.setAttribute('style', 'display: none;');	
				
		questionOutput.textContent = questions[2].title;
		buttonOption1.textContent = questions[2].choices[0];
		buttonOption2.textContent = questions[2].choices[1];
		buttonOption3.textContent = questions[2].choices[2];
		buttonOption4.textContent = questions[2].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[2].choices[0] !== questions[2].answer) {
				wrongAnswer();
			} else {
				question4();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[2].choices[1] !== questions[2].answer) {
				wrongAnswer();
			} else {
				question4();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[2].choices[2] !== questions[2].answer) {
				wrongAnswer();
			} else {
				question4();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[2].choices[3] !== questions[2].answer) {
				wrongAnswer();
			} else {
				question4();
			}
		});
		
	};
	
	function question4() {	
		
		validation.setAttribute('style', 'display: none;');	
		
		questionOutput.textContent = questions[3].title;
		buttonOption1.textContent = questions[3].choices[0];
		buttonOption2.textContent = questions[3].choices[1];
		buttonOption3.textContent = questions[3].choices[2];
		buttonOption4.textContent = questions[3].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[3].choices[0] !== questions[3].answer) {
				wrongAnswer();
			} else {
				question5();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[3].choices[1] !== questions[3].answer) {
				wrongAnswer();
			} else {
				question5();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[3].choices[2] !== questions[3].answer) {
				wrongAnswer();
			} else {
				question5();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[3].choices[3] !== questions[3].answer) {
				wrongAnswer();
			} else {
				question5();
			}
		});
		
	};
	
	function question5() {	
		
		validation.setAttribute('style', 'display: none;');
		
		questionOutput.textContent = questions[4].title;
		buttonOption1.textContent = questions[4].choices[0];
		buttonOption2.textContent = questions[4].choices[1];
		buttonOption3.textContent = questions[4].choices[2];
		buttonOption4.textContent = questions[4].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[4].choices[0] !== questions[4].answer) {
				wrongAnswer();
			} else {
				summary();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[4].choices[1] !== questions[4].answer) {
				wrongAnswer();
			} else {
				summary();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[4].choices[2] !== questions[4].answer) {
				wrongAnswer();
			} else {
				summary();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.stopPropagation();
			event.preventDefault();
			
			if (questions[4].choices[3] !== questions[4].answer) {
				wrongAnswer();
			} else {
				summary();
			}
		});
		
	};
	
	function summary() {
		clearInterval(timer);
		
		document.querySelector('#quiz').setAttribute('style', 'display: none;');
		document.querySelector('#summary').setAttribute('style', 'display: block;');
		
		var score = document.querySelector('#time').textContent;
		
		document.querySelector('#score').textContent = score;
		
		document.querySelector('#summary button').addEventListener('click', function(event) {
			event.preventDefault();
			
			var name = document.querySelector('#name').value;
			
			if (name !== '') {				
				localStorage.setItem('name', name);
				localStorage.setItem('score', score);
				
				window.location.href = 'scores.html';					
			} else {
				document.querySelector('#summary .alert').setAttribute('style', 'display: block;');
			}
			
		});
		
	};
	
	question1();
		
};

var main = document.querySelector('#main');
var quiz = document.querySelector('#quiz');
var summary = document.querySelector('#summary');

document.querySelector('#main button').addEventListener('click', function(event) {
	event.preventDefault();
	
	main.setAttribute('style', 'display: none;');
	quiz.setAttribute('style', 'display: block;');
	
	startTimer();

});