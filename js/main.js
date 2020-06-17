// pulls score list <ul>, creates a starter array, and pulls scores from local storage
var ul = document.querySelector('#score-list');
var noScores = document.querySelector('.no-scores');
var main = document.querySelector('#main'); 
var quiz = document.querySelector('#quiz');
var summary = document.querySelector('#summary');

// starts array empty
var scoresArray = [];

// if elements are stored, update array with local storage items
var storage = JSON.parse(localStorage.getItem('scoreList'));
if (storage !== null) {
	scoresArray = storage;
}

// sorts array items by score from highest to lowest
scoresArray.sort(function (a, b) {
	return parseInt(b.score) - parseInt(a.score);
});





if (document.body.className === 'scores') { // if scores.html file...

	// create a <li> for each array item
	scoresArray.forEach(function(i) {
		var li = document.createElement('li');
		li.setAttribute('value', i.score);
		li.innerHTML = '<strong style="text-transform: uppercase">' + i.name + ':</strong> ' + i.score;

		ul.appendChild(li);
		noScores.setAttribute('style', 'display: none;'); // hide initial "no high scores" message
	});

	// when clear button is clicked, update array to empty again and store new array in local storage
	document.querySelector('#scores .btn-secondary').addEventListener('click', function() {
		scoresArray = [];
		localStorage.setItem('scoreList', JSON.stringify(scoresArray));
		ul.innerHTML = '<li class="no-scores"><strong>No High Scores.</strong> Take the quiz to add your score here.</li>';
	});
	
}





// if index.html file...
if (document.body.className === 'quiz') {
	
	// on #main button click, start the timer and quiz
	document.querySelector('#main button').addEventListener('click', function(event) {
		event.preventDefault();
		
		main.setAttribute('style', 'display: none;');
		quiz.setAttribute('style', 'display: block;');
		
		startTimer();	
	});
	
}





// try again button takes you to index.html#start to auto start the quiz 
document.querySelector('.btn-primary').addEventListener('click', function(event) {
	event.preventDefault();
	window.location.href = 'index.html#start';
});

// if URL includes hash #start, start the timer and quiz
if (window.location.href === 'file:///Users/lauren/Github/code-quiz/index.html#start' || 
	window.location.href === 'https://siminski.github.io/code-quiz/index.html#start') {
		
	main.setAttribute('style', 'display: none;');
	quiz.setAttribute('style', 'display: block;');
	
	startTimer();
}





// start the quiz and timer
function startTimer() {

	// pulls quiz alert, countdown #time, and sets time limit for timer
	var validation = document.querySelector('#question .alert');
	var time = document.querySelector('#time');
	var timeLeft = 60;
	
	// deducts 10 seconds or sets time to 0 if less than 10
	function deductTime() {			
		if (timeLeft < 10) {
			timeLeft = 0;
		} else {
			timeLeft = timeLeft - 10;
		}
	};
	
	// deducts time and shows quiz alert
	function wrongAnswer() {
		deductTime();
			
		console.log('nooooo');
		console.log('——————————');
		
		validation.setAttribute('style', 'display: block;');
	};
	
	// sets timer interval and outputs current time on page
	var timer = setInterval( function() {			
		timeLeft--;
		time.textContent = timeLeft;
					
		if (timeLeft <= 0) {
			timeLeft = 0;
			time.textContent = 0;
			clearInterval(timer);
		}	
			
	}, 1000);





	// pulls output for question and buttons
	var questionOutput = document.querySelector('#question h2');
	var buttonOption1 = document.querySelector('button#choice0');
	var buttonOption2 = document.querySelector('button#choice1');
	var buttonOption3 = document.querySelector('button#choice2');
	var buttonOption4 = document.querySelector('button#choice3');

	// !!!!!! HELP !!!!!!!!
	// Commented out questions throwing both if true AND else functions when clicked

	// quiz questions	
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
	
	// start by showing question 1
	question1();
	




	// !!!!!! HELP !!!!!!!!
	// Can't figure out how to get questions in a loop
	// When wrong answer if clicked, else function multiplies

	// question 1	
	function question1() {			
		validation.setAttribute('style', 'display: none;');					
		questionOutput.textContent = questions[0].title;
		buttonOption1.textContent = questions[0].choices[0];
		buttonOption2.textContent = questions[0].choices[1];
		buttonOption3.textContent = questions[0].choices[2];
		buttonOption4.textContent = questions[0].choices[3];

		// !!!!!! HELP !!!!!!!!
		// Can these buttons be in a loop ??
		
		buttonOption1.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[0].choices[0] !== questions[0].answer) {
				wrongAnswer();
				console.log('question 1, button 1');
			} else {
				question2();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[0].choices[1] !== questions[0].answer) {
				wrongAnswer();
				console.log('question 1, button 2');
			} else {
				question2();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[0].choices[2] !== questions[0].answer) {
				wrongAnswer();
				console.log('question 1, button 3');
			} else {
				question2();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[0].choices[3] !== questions[0].answer) {
				wrongAnswer();
				console.log('question 1, button 4');
			} else {
				question2();
			}
		});	
	};
	
	// question 2
	function question2() {			
		validation.setAttribute('style', 'display: none;');					
		questionOutput.textContent = questions[1].title;
		buttonOption1.textContent = questions[1].choices[0];
		buttonOption2.textContent = questions[1].choices[1];
		buttonOption3.textContent = questions[1].choices[2];
		buttonOption4.textContent = questions[1].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[1].choices[0] !== questions[1].answer) {
				wrongAnswer();
				console.log('question 2, button 1');
			} else {
				question3();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[1].choices[1] !== questions[1].answer) {
				wrongAnswer();
				console.log('question 2, button 2');
			} else {
				question3();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[1].choices[2] !== questions[1].answer) {
				wrongAnswer();
				console.log('question 2, button 3');
			} else {
				question3();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[1].choices[3] !== questions[1].answer) {
				wrongAnswer();
				console.log('question 2, button 4');
			} else {
				question3();
			}
		});	
	};
	
	// question 3
	function question3() {		
		validation.setAttribute('style', 'display: none;');					
		questionOutput.textContent = questions[2].title;
		buttonOption1.textContent = questions[2].choices[0];
		buttonOption2.textContent = questions[2].choices[1];
		buttonOption3.textContent = questions[2].choices[2];
		buttonOption4.textContent = questions[2].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[2].choices[0] !== questions[2].answer) {
				wrongAnswer();
				console.log('question 3, button 1');
			} else {
				question4();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[2].choices[1] !== questions[2].answer) {
				wrongAnswer();
				console.log('question 3, button 2');
			} else {
				question4();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[2].choices[2] !== questions[2].answer) {
				wrongAnswer();
				console.log('question 3, button 3');
			} else {
				question4();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[2].choices[3] !== questions[2].answer) {
				wrongAnswer();
				console.log('question 3, button 4');
			} else {
				question4();
			}
		});	
	};
	
	// question 4
	function question4() {		
		validation.setAttribute('style', 'display: none;');			
		questionOutput.textContent = questions[3].title;
		buttonOption1.textContent = questions[3].choices[0];
		buttonOption2.textContent = questions[3].choices[1];
		buttonOption3.textContent = questions[3].choices[2];
		buttonOption4.textContent = questions[3].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[3].choices[0] !== questions[3].answer) {
				wrongAnswer();
				console.log('question 4, button 1');
			} else {
				question5();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[3].choices[1] !== questions[3].answer) {
				wrongAnswer();
				console.log('question 4, button 2');
			} else {
				question5();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[3].choices[2] !== questions[3].answer) {
				wrongAnswer();
				console.log('question 4, button 3');
			} else {
				question5();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[3].choices[3] !== questions[3].answer) {
				wrongAnswer();
				console.log('question 4, button 4');
			} else {
				question5();
			}
		});		
	};
	
	// question 5
	function question5() {			
		validation.setAttribute('style', 'display: none;');		
		questionOutput.textContent = questions[4].title;
		buttonOption1.textContent = questions[4].choices[0];
		buttonOption2.textContent = questions[4].choices[1];
		buttonOption3.textContent = questions[4].choices[2];
		buttonOption4.textContent = questions[4].choices[3];
		
		buttonOption1.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[4].choices[0] !== questions[4].answer) {
				wrongAnswer();
				console.log('question 5, button 1');
			} else {
				summary();
			}
		});
		
		buttonOption2.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[4].choices[1] !== questions[4].answer) {
				wrongAnswer();
				console.log('question 5, button 2');
			} else {
				summary();
			}
		});
		
		buttonOption3.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[4].choices[2] !== questions[4].answer) {
				wrongAnswer();
				console.log('question 5, button 3');
			} else {
				summary();
			}
		});
		
		buttonOption4.addEventListener('click', function(event) {
			event.preventDefault();
			
			if (questions[4].choices[3] !== questions[4].answer) {
				wrongAnswer();
				console.log('question 5, button 4');
			} else {
				summary();
			}
		});		
	};
	




	// quiz results
	function summary() {
		clearInterval(timer);		
		document.querySelector('#quiz').setAttribute('style', 'display: none;');
		document.querySelector('#summary').setAttribute('style', 'display: block;');
		
		// creates a variable of the new score and outputs it to the summary
		var newScore = document.querySelector('#time').textContent;
		document.querySelector('#score').textContent = newScore;	
		
		// when submit score button is clicked, then create an object based on the user's name input and score
		document.querySelector('#summary button').addEventListener('click', function(event) {
			event.preventDefault();
			
			var name = document.querySelector('#name').value.trim();
			
			if (name !== '') {	
				
				var newHighScore = {
				    name: document.querySelector('#name').value,
				    score: document.querySelector('#time').textContent
				};

				scoresArray.push(newHighScore);
				localStorage.setItem('scoreList', JSON.stringify(scoresArray)); // stringify the array and send to local storage							
				window.location.href = 'scores.html'; // redirect to scores.html	

			} else {
				document.querySelector('#summary .alert').setAttribute('style', 'display: block;'); // throw alert
			}			
		});		
	};

	



}; // end of startTimer function