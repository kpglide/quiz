$(document).ready(function() {
	
	// Construction function to create quiz questions.
	// Accepts question string and array of answer strings
	// as parameters.
	var question_counter = 0;
	var number_correct = 0;

	var pinehurst_question = new Question("Which noted golf course architect " +
		"designed Pinehurst #2 in Pinehurst, NC?", 
		['Donald Ross', 'Pete Dye',
		'Jack Nicklaus', 'Robert Trent Jones'], 0)

	var standrews_question = new Question("Which course is known as the home " +
		"of golf", ['Augusta National Golf Club', 'Pebble Beach Golf Links', 'St. ' +
		'Andrews Links', 'Muirfield'], 2)

	var question_list = [pinehurst_question, standrews_question];
	var curent_question = question_list[question_counter];

	ask_question(question_counter, question_list);
	
	$('#submit').on('click', function(event) {
		if (countChecked() == 0) {
			return;	
		} else {
			score(curent_question.correct_answer);
			question_counter++;
			ask_question(question_counter, question_list);
		}
	});

	$('#submit').on('click', function(event) {
		console.log('works');
	});

	function ask_question(number, questions) {
		$('#question').empty();
		question = questions[number];
		$('#question-title').text(question.question);
		answers = question.answers;
		for (var index = 0; index < answers.length; index++) {
			answer_input = '<input type="radio" name="option" class="option" value="0">' +
							'<span class="answer">' + answers[index] +
							'</span><br>'
			$('#question').append(answer_input);
		}
	}

	function score(correct_answer) {
		//checks user answer against the correct answer
		var user_answer = $('input:checked').val();
		if (user_answer == correct_answer) {
			return true;
		} else {
			return false;
		}
	}

	function report_results(score) {
		if (score) {
			$("#right-container").text("That's correct, great job!");
		} else {
			$("#right-container").text("Nope, sorry, the correct answer is " +
				current_question..answers[correct_answer]);
		}
	}

	function Question(question, answers, correct_answer) {
		//Object representing a multiple choice quiz question
		//question: string of the question
		//answers: array of answer choice strings
		//correct_answer: index (int) of the correct answer within the answers array
		this.question = question;
		this.answers = answers;
		this.correct_answer = correct_answer;
	}

	function countChecked() {
		var num_checked = $("input:checked").length;
		return num_checked;
	}

});