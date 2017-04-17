var blogPosts = [{title: "Week Two", copy: "The biggest takeaways from this week have been from working on group projects. The experience revealed a lot to me about how group dynamics can work on a software building project and it also effectively showed me how there are multiple factors that definitely go beyond the realm of simply coding which can determine the success of the project.", date: "April 8, 2017"},
{title: "Week One", copy: "In no particular order here are some other things I've learned about: plugins, communicating with Slack, terminal aliases, linking to .css and .js files, pseudoclasses, semantical tags, basic html layouts, making Sublime snippets, MVP, and the deeper fundamentals of 'for loops'.", date: "April 14, 2017"}];




for (var i = 0; i < blogPosts.length; i++) {
	var string = "<article class ='blog'>" + "<h4 class='weekNumber'>" + blogPosts[i].title + "</h4><p class='postCopy'>" + blogPosts[i].copy + "</p><p><small>" + blogPosts[i].date + "</small></p>";
	document.getElementById("blogPosts").innerHTML += string;
}




