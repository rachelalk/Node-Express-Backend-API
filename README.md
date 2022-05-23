<h1>Node, Express.js, backend API</h1>

<h2>The task:</h2>
<ul>
  <li>This week we were tasked with using Node, express.js and postman to help us create a local backend API server and then hook it up to the front end, allowing a user to add their own recipe to the webpage.</li>

  
  <h2>Main learning points</h2>
  <li>The first thing that I learnt was that ESM and Common JS are not compatable, you must choose one or the other and stick with it throughout. During the week we were mainly exposed to Common JS and the file that we were presented with for the Hackathon had a mixture of both ESM and Common JS used in it so we needed to check through the files and standardise them. We decided that since we haven't really used ESM we would give that a go and changed everything to ESM. Whilst ensuring that our code was standardised we carried out a number of exports and imports to link up our files correctly. We also made sure that package.json had "type" : "module" listed to allow this to work.</li>
  <li>Next we planned, planning is so important as it stops you from getting lost whilst coding but also helps you to consolodate that knowledge, thinking about why you are doing something rather than blindly typing.</li>
  <li>We then created a number of different requests within the router file and directed the main app file to the router so that it could use them to process requests. We used GET, POST, PUT and DELETE. We used postman to check that they were doing what we has hoped and that the output of each function met the requirements of the brief. Doing this, I realised just how important checking that your code is functioning after every step is. If there is a problem you know exactly where it is so you don't have to trail through all of your code to find the issue.</li>
  <li>After this we were tasked with refactoring our requests into functions within the models folder, this made our code much more readable and organised. We used the functions within the models file within the queries in the router file to return the same results as before. This felt tricky at first but once I got my head around what was being inputted to each function and what was needed for it to work it was actually a fairly straightforward job.</li>
  <li>After this we hooked up the back end to the front end which allowed the user to add their own recipes to the page without the use of postman.</li>
  <li>Next, we added some middlewear to the apps.js file which counted the number of requests that the server received and the type of requests.</li>
  <li>Finally, we added a few query requests on the back end which allow the user to search for a recipe by title, ingredients or even edit a recipe using PATCH.</li>
  <li>During this task I had lots of opportunities to help my fellow bootcampers and I found it so useful to articulate and explain how my partner and I solved a specific problem in order to help them. This really solidified my knowledge and put me in a really good position to complete the weekend tasks alone.</li>
