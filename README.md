# friendfinder

In this assignment, we built a friendfinder that matches the user with a friend based on their responses to a survey.  This assignment went through several topics that we've covered in class so far, html, css, jquery, express, modularization.  

I set up a basic server with express to handle data parsing.  The port up so that it will be deployable to heroku using process.env.PORT.  I also required the routing JS files so they can run through the server.

The routing was split into two files, API routing and HTML routing.  The HTML routing handled the routing for all the HTML files and also handles any address with the "*" route.  The API routes handle the friend comparison logic and displaying the friendCompare array that stores the friend Objects.

I was able to get the friends to match but did not get it to display in the modal.