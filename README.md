README

Capstone Trail Tracker Client App

Links:
  Client Repo: https://github.com/bcameron1489/trail-tracker-client
  Api Repo: https://github.com/bcameron1489/trail-tracker-api
  Deployed Client: https://bcameron1489.github.io/trail-tracker-client/
  Deployed Api: https://trail-tracker-api.herokuapp.com/
  Wireframes : https://imgur.com/gallery/gbJJ6




Technologies used: Javascript, Handlebars, Bootstrap, Sass, HTML5, AJAX, jQuery

What is this App?
  I've created a single page application that provides a user access to a database of trails.  The app currently allows a user
  to save a trail, mark it as completed and view the trails cooresponding mountain trail map.

How does it work?
  A user must first sign up and sign in before accessing the sites content.  Upon sign in, the user is given our list of trails which they can add
  to their saved list.  A user has the ability to add and delete trails to and from their list.  Additionally they can update the complete field
  through a text form.  Finally, the user has access to a "trails" view where they're given access to their personal list of trails and can
  choose to render an HD trail map.

  The client is built primarily with javascript, jquery and handlebars while using ajax to comunicate with my rails api.


Development Process :
Draw up ERD, wireframes and user stories for planning.
Plan out an clear and well thought out direction and order of operations.
Create both repos with the right templates and deploy to proper sites.
Deploy backend on heroku.
Install dependencies test both development and production sites.
Start with the back end, curl user auth and begin to generate first resource.
Test routes using curl scripts and update the controller and models accordingly.
When crud actions checkout, rinse and repeat while considering changes made due to any relationships created.
Test CRUD actions again to make sure all nessesary changes have been made to the routes and controller and run curl scripts.
Once all resources are confirmed working move to front end and begin creating request to the api starting with auth.
Begin with sign-in/up/out/change-password ajax requests. Begin with your forms and create a link to your index.js through event handlers within your events.
Once all auth specs check out move onto client requests, again, curl requesting each action to ensure the api is returning a response and adjust accordingly.
Use handlebars to process json data into html.
Once features are all running adjust the ui's to clear form fields and clean up the page by utilizing css.
Debug issues and clean up your code (make sure all consolelogs have been removed).


User Stories : ![Alt text](/images/app-screenshot.png?raw=true)

Unsolved Problems :
  If you were to look at my previous commits you would see that I originally started this project with the front end framework ember.  However, between the numerous issues I was having (linux compatibility issues, server issues, time constraints, all coupled with the general lack of knowledge that comes with learning a new framework) and the amount of time I had already lost, I decided to put ember on the back burner and restart from scratch with a js template.  I look forward to approaching this project with ember in the future and with more time to figure out the issues I was having in my linux terminal (Ember server would often hang or freeze my laptop when making changes in my text editor).
