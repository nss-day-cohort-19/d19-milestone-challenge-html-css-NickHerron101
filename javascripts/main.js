var blogPosts = [{title: "Week Two", copy: "Bacon ipsum dolor amet cupim prosciutto brisket shoulder short ribs shankle jowl beef ribs rump ribeye corned beef ham hock alcatra. Pork loin spare ribs burgdoggen, rump salami alcatra venison fatback shank tri-tip kielbasa. Kevin kielbasa ribeye pork, boudin burgdoggen doner pancetta turducken spare ribs chicken short loin jerky. Boudin pork pork loin brisket porchetta sirloin shoulder doner ball tip cow shank.", date: "April 8, 2017"},
{title: "Week One", copy: "Bacon pig cow rump bresaola tongue short loin strip steak tri-tip tenderloin fatback pancetta. Tail drumstick andouille doner picanha ribeye. Meatball turducken tongue cow strip steak. Tongue pig burgdoggen porchetta ground round pastrami picanha, beef ribs fatback tail pancetta meatloaf bresaola prosciutto.", date: "April 14, 2017"}];




for (var i = 0; i < blogPosts.length; i++) {
	var string = "<article class ='blog'>" + "<h4 class='weekNumber'>" + blogPosts[i].title + "</h4><p class='postCopy'>" + blogPosts[i].copy + "</p><p><small>" + blogPosts[i].date + "</small></p>";
	document.getElementById("blogPosts").innerHTML += string;
}

// for (var i = 0; i < games.length; i++) { // loop through the array
// 		/// made a variable assigned to a string that will get looped through
// 		var gameString = "<div class = 'card game" + (i + 1) + "'><h2>" + games[i].name + "</h2><p>" + games[i].description + "</p>" + "<p>" + "$" + games[i].price + "</p>" + "<p>" + "<img class='' src='" + games[i].img + "'></div>";
// 		// assign the string, which has been looped through to the div "games" and come back around to being again
// 		document.getElementById("games").innerHTML += gameString;
// };

// for ( var i = 0; i < jedi.length; i++){
// // 	jediText += jedi[i] + " is a <strong>jedi.</strong> <br>";
	jediText += `${jedi[i]} is a Jedi<br>`; //template string literal


