Software Requirements

What is the vision of this product?
	For a user to be able to login to the app, choose a team of pokemon and save  that selection to a favorites list.  Users should be able to manually update that roster with a different team, depending on the situation. 

What pain point does this project solve?
	It provides a user with a database to store their favorite pokemon. It helps users organize their favorite pokemon characters by types and give a visual reference.  Helps user discover new pokemon that they had not seen before.


Why should we care about your product?
Pokemon fans number in the millions and are found across the 7 continents. This app  provides the user the functionality to save their favorite pokemon.  And expose them to new types of  pokemon, attracting new users to the website providing more ad revenue.


Scope In
Auth0 login:
Provide user  third party accounts login with google, Facebook, ect.

Search bar: Users can search for Pokemon using the name or individual ID number.

Save roster: Users will be able to save their favorite pokemon cards to the database.

Update roster: Users will be able to update their roster to database.

Delete pokemon from roster: Users will be able to delete pokemon cards  or list from database.


Scope Out
No option to battle pokemon
Wil never use the price finding capabilities of api


MVP:User will need to be able to login.  Have the capability to search for cards and add them to the roster and be able to update that list. Provided user with visual reference to pokemon cards.

Stretch goals
Having cards packs that have ability with information section 


Function requirements
For a user to be able to login to the app, choose a team of pokemon and save  that selection to a favorites list.  Users should be able to manually update that roster with a different team, depending on the situation. 


Data flow

User land on login page, the are able to login or create account
User proceeds to home page,user searches for pokemon which creates request to our backend, or backend then sends a request ot api for that data, api returns response to backend, then groom data to send only necessary data and sends that to front end
Front end receives that data and displays the pokemon card with requested information 
User will have ability to add that card to their roster (request to server to use post request to save that to roster on database.)
User can then search for other card or use nav bar to go to view their roster
Roster page (create git request to database, this will return call the cards in roster)
 w all the cards added to roster and user will have ability to add or swap out team members using pokemon in your roster
Will also have ability to delete pokemon from their roster


Functionality requirements

Test ability add console log to code make sure right code is being returned or data flow stuck at
Usability design a cache to store data from API, less api calls 

