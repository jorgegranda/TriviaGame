$(document).ready(function() {	

		// Matching Elements assigned to each radio //

	var correctValues = ["Bosphorus Strait", "Neptune", "Brunelleschi", "Terabyte", "Smooth Criminal", "Sheep"];	

	   // Varialble for Correct Answers //

	var selectAnswers = [];	

	  // Variable to log correct responses //

	var correctCount = 0;

	  // Variable to log incorrect responses //

	var incorrectCount = 0;
	
     // Function Execution of Working Logic //

function execFunction() {

	// Storing Elements of responses & Executing Results //

	$("#AnswerOne").one('click', function() {

	var responseOne = $("#AnswerOne input[type='radio'][name='geo']:checked").val();

		selectAnswers.push(responseOne)

	if (selectAnswers[0] === correctValues[0]) {

		correctCount++;

		console.log("Correct: " + correctCount);

		console.log(selectAnswers)	
    } 

    else if (selectAnswers[0] !== correctValues[0]) {

		incorrectCount++;

		console.log("Incorrect: " + incorrectCount);

		console.log(selectAnswers)	
	}

	if (seconds === 0){

		stopCount();
		}

	});



	$("#AnswerTwo").one('click', function() {

	var responseTwo = $("#AnswerTwo input[type='radio'][name='planet']:checked").val();

	    selectAnswers.push(responseTwo)

	if (selectAnswers[1] === correctValues[1]) {

		correctCount++;

		console.log("Correct: " + correctCount);

		console.log(selectAnswers)
	} 

	else if (selectAnswers[1] !== correctValues[1]) {

		incorrectCount++;

		console.log("Incorrect: " + incorrectCount);

		console.log(selectAnswers)
	}

	if (seconds === 0){

		stopCount();
		}
	});


	$("#Answer3").one('click', function() {

		var responseThree = $("#Answer3 input[type='radio'][name='sacredGeo']:checked").val();

		selectAnswers.push(responseThree)

	if (selectAnswers[2] === correctValues[2]) {

		correctCount++;

		console.log("Corect: " + correctCount);

		console.log(selectAnswers)

	} 

	else if (selectAnswers[2] !== correctValues[2]) {

		incorrectCount++;

		console.log("Incorrect: " + incorrectCount);

		console.log(selectAnswers)
	}

	if (seconds === 0){

		stopCount();
		}
	});


	$("#Answer4").one('click', function() {

	var responseFour = $("#Answer4 input[type='radio'][name='byte']:checked").val();

		selectAnswers.push(responseFour)

	if (selectAnswers[3] === correctValues[3]) {

		correctCount++;

		console.log("Correct: " + correctCount);

	    console.log(selectAnswers)
	} 

	else if (selectAnswers[3] !== correctValues[3]) {

		incorrectCount++;

		console.log("Incorrect: " + incorrectCount);

		console.log(selectAnswers)
	}

	if (seconds === 0){

		stopCount();

		}
	});


    $("Answer5").one('click', function() {

	var responseFive = $("#Answer5 input[type='radio'][name='mj']:checked").val();

	selectAnswers.push(responseFive)

	if (selectAnswers[4] === correctValues[4]) {

	    correctCount++;

		console.log("Coorect: " + correctCount);

		console.log(selectAnswers)
	} 
	
	else if (selectAnswers[4] !== correctValues[4]) {

		icorrecgCount++;

		console.log("Incorrect: "+ incorrectCount);

		console.log(selectAnswers)

	}

	if (seconds === 0){

		stopCount();
		}

	});



	$("#AnswerSix").one('click', function() {

	var responseSix = $("#AnswerSix input[type='radio'][name='milk']:checked").val();
			
		selectAnswers.push(responseSix)

	if (selectAnswers[5] === correctValues[5]) {

		correctCount++;

		console.log("Correct: " + correctCount);

		console.log(selectAnswers)
	} 
	
	else if (selectAnswers[5] !== correctValues[5]) {

		incorrectCount++;

		console.log("Incorrect " + incorrectCount);

		console.log(selectAnswers)
	}

	if (seconds === 0){

		stopCount();
		}

	});

	

	
	};

	execFunction();

	var seconds = 60;
	var myInterval;

	var decrement =  function () {

		seconds--

		console.log(seconds);

		console.log("Time Remaining");		

		$("#timerCount").html("<h4><hr>Time Remaining: " + seconds + " Seconds!<hr></h4>");		

		if (seconds === 0) {
			stopCount();
			emptyContent();
			push();

		}
	 }

	var push = function() {

	 	var Div = $("<div>");

	 	$("#timerCount").append(Div);

	 	Div.append("Correct Responses: " + correctCount + "<br>");

	 	Div.append("Incorrect Responses: " + incorrectCount);	

	}

	var start = function() {

	 	countDown();
	}

	 
	var emptyContent = function(){

	 	$("#timerCount").empty();

	}

	var countDown = function() {

	 	myInterval = setInterval(decrement, 1000); 

	}

	var stopCount = function() {

	 	clearInterval(myInterval);

	}
	countDown();

});

    




	