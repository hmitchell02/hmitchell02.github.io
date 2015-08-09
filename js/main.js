function askQuestions(){

	var firstName = prompt('Hey there, Whats your first name?');
	var lastName = prompt('And your last name?')

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Hello ' + fullName)

	var userAge = prompt ('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >=18) {
		console.log('The user is an adult');

	} else if (userAge >=13) {
		console.log('User is a teenager');

	} else {
		console.log('Go away child');

	}

	if (firstName.toLowerCase() ==="general" && lastName.toLowerCase() !== "assembley"){
		console.log('The user is a freaking genereal');
	}

	var faveColour = prompt('What colour you like best me mate?').toLowerCase();

	if (faveColour == 'red'||
		faveColour == 'green'||
		faveColour == 'blue'||
		faveColour == 'yellow') {
		$('h2').css('background-color', faveColour);

	}
}

// When the page has loaded
$(function() {
	$('img').on('click', askQuestions);
	

	//Get all sections
	var sections = $('h3').next();

	//hide all sections
	sections.hide();

	//when the user clicks an h3
	$('h3').on('click',function() {

		//Rememebr the section the user wants to see
		var thisSection = $(this).next();

		//Hide all the sections except the one the user wants to see
		sections.not(thisSection).slideUp();

		//Toggle the one the user wants to see
		thisSection.slideToggle(200);


	})



});