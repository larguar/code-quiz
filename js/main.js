// pulls score list <ul>, creates a starter array, and pulls scores from local storage
var ul = document.querySelector('#score-list');
var noScores = document.querySelector('.no-scores');

// starts array empty
var scoresArray = [];

// if elements are stored, update array with local storage items
var storage = JSON.parse(localStorage.getItem('Score List'));
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
		localStorage.setItem('Score List', JSON.stringify(scoresArray));
		ul.innerHTML = '<li class="no-scores"><strong>No High Scores.</strong> Take the quiz to add your score here.</li>';
	});

	// try again button takes you to index.html#start to auto start the quiz 
	document.querySelector('.btn-primary').addEventListener('click', function(event) {
		event.preventDefault();
		window.location.href = 'index.html#start';
	});

}

if (document.body.className === 'quiz') { // if index.html file...
	
	// pull main container div
	var mainContainer = document.querySelector('#main');
	
	// quiz questions
	var questionArray = [
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
		{
			title: 'Arrays in JavaScript can be used to store ____.',
			choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
			answer: 'all of the above'
		},
		{
			title: 'String values must be enclosed within ____ when being assigned to variables.',
			choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
			answer: 'quotes'
		},
		{
			title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
			choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
			answer: 'console.log'
		}
	];
	
	// create intro <section> and populate content
	var intro = document.createElement('section');
	intro.setAttribute('id', 'intro');
	intro.classList = 'container';
	intro.innerHTML = '<div class="row"><div class="col-12"><h1>Coding Quiz</h1><p class="lead">You have 60 seconds to answer 5 code-related questions.</p><p>To move on to the next question, you must answer the current question correctly. Your time limit will decrease by 10 seconds every time you answer a question incorrectly.</p><p>Your final score is measured by the time it takes to answer all 5 questions.</p><button class="btn btn-primary btn-lg">Start Quiz</button></div></div>';
	
	// append intro <section>
	mainContainer.appendChild(intro);
	
	// on intro button click...
	document.querySelector('#intro .btn').addEventListener('click', function(event) {
		event.preventDefault();
		
		// create quiz <section>
		var quiz = document.createElement('section');
		quiz.setAttribute('id', 'quiz');
		quiz.classList = 'container';
		
		// append quiz <section>
		mainContainer.appendChild(quiz);
		
		// hide intro section
		document.querySelector('#intro').setAttribute('style', 'display: none;');	
		
		// start the quiz and timer
		startTimer();
		
	});
	
}
	
function startTimer() {

	// sets time limit for timer
	var timeLeft = 60;
	
	// deducts 10 seconds or sets time to 0 if less than 10
	function deductTime() {			
		if (timeLeft < 10) {
			timeLeft = 0;
		} else {
			timeLeft -= 10;
		}
	};
	
	// sets timer interval and outputs current time on page
	var timer = setInterval(function() {			
		timeLeft--;
		time.textContent = timeLeft;
					
		if (timeLeft <= 0) {
			timeLeft = 0;
			time.textContent = 0;
			clearInterval(timer);
			endQuiz();
		}	
			
	}, 1000);
	
	// declare start index
	var questionNumber = 0;

	// populate first question
	populateQuestion(questionNumber);
	
	// populate question with index...
	function populateQuestion(index) {
	
		// create <article>
		var question = document.createElement('article');
		question.setAttribute('id', 'question-' + index);
		question.classList = 'question row';	
		
		// create col-12 <div>
		var col = document.createElement('div');
		col.classList = 'col-12';
		
		// create <h2> and populate with array title
		var h2 = document.createElement('h2');
		h2.textContent = questionArray[index].title;
		
		// create form for buttons
		var form = document.createElement('form');
		form.setAttribute('id', 'buttons');
		
		// for each choice in array...
		questionArray[index].choices.forEach(function(i) {	
			
			// create <button>	
			var choice = document.createElement('button');
			choice.setAttribute('type', 'submit');
			choice.setAttribute('value', i);
			choice.classList = 'btn';
			choice.textContent = i;	
			
			// append <button>	
			form.appendChild(choice);		
			
			// on button click...
			choice.addEventListener('click', function(event) {
				event.preventDefault();
				
				// if wrong answer is clicked...		
				if (this.value !== questionArray[questionNumber].answer) {
					
					deductTime();
					alert.setAttribute('style', 'display: block;');	
					
					// populate next question after delay	
					setTimeout(() => {
						populateNext();
					}, 400);
				
				// if correct answer is clicked...	
				} else {						
					populateNext();				
				}
			
			});
			
		});
		 
		// create alert
		var alert = document.createElement('div');
		alert.classList = 'alert';
		alert.textContent = 'Wrong! Try Again';
		alert.setAttribute('style', 'display: none;');
		
		// append all
		form.appendChild(alert);
		col.appendChild(h2);
		col.appendChild(form);
		question.appendChild(col);
		document.querySelector('#quiz').appendChild(question);
	
	};

	function populateNext() {		
			
		// hide previous question
		document.querySelector('#question-' + questionNumber).setAttribute('style', 'display: none;');
		
		// if index is less than 4		
		if (questionNumber < 4) {	
			
			// populate next question
			questionNumber++;				
			populateQuestion(questionNumber);
			
		} else {	
			clearInterval(timer);
			endQuiz();
		}
		
	}

} // end of startTime function
	
function endQuiz() {
	
	// hide quiz <section>
	document.querySelector('#quiz').setAttribute('style', 'display: none;');
	
	// grab final score
	var score = document.querySelector('#time').textContent;
	score = parseInt(score);
	
	// create summary <section> and populate content
	var summary = document.createElement('section');
	summary.setAttribute('id', 'summary');
	summary.classList = 'container';
	summary.innerHTML = '<div class="row"><div class="col-12"><h2>Done!</h2><p class="lead">Your final score is <span id="score">' + score + '</span>.</p><form class="form-inline"><input id="name" class="form-control mb-2 mb-sm-0 mr-sm-2" type="text" placeholder="Your Name"><button type="submit" class="btn btn-primary">Submit Score</button><div class="alert">Please enter at least 1 character.</div></form></div></div>';
	
	// append summary <section>
	mainContainer.appendChild(summary);
	
	// hide summary alert
	var alert2 = document.querySelector('#summary .alert');
	alert2.setAttribute('style', 'display: none;');	
	
	// when submit score button is clicked, then create an object based on the user's name input and score
	document.querySelector('#summary button').addEventListener('click', function(event) {
		event.preventDefault();
		
		var name = document.querySelector('#name').value.trim();
		
		if (name !== '') {	
			
			var newHighScore = {
			    name: name,
			    score: score
			};

			scoresArray.push(newHighScore);
			localStorage.setItem('Score List', JSON.stringify(scoresArray)); // stringify the array and send to local storage							
			window.location.href = 'scores.html'; // redirect to scores.html	

		} else {
			document.querySelector('#summary .alert').setAttribute('style', 'display: block;'); // throw alert
		}			
	});
	
}

// if URL includes hash #start, start the timer and quiz
if (window.location.href === 'file:///Users/lauren/Github/code-quiz/index.html#start' || 
	window.location.href === 'https://siminski.github.io/code-quiz/index.html#start' ||
	window.location.href === 'file:///Users/lauren/Desktop/Bootcamp/code-quiz/index.html#start') {
	
	// create quiz <section>
	var quiz = document.createElement('section');
	quiz.setAttribute('id', 'quiz');
	quiz.classList = 'container';
	
	// append quiz <section>
	mainContainer.appendChild(quiz);
	
	// hide intro section
	document.querySelector('#intro').setAttribute('style', 'display: none;');	
	
	// start the quiz and timer
	startTimer();
}