# Pokedex

# Summary

App will provide user with ability to login using of auth0 to log in to personal account.  Once logged in they will be able to search and create unique playlist for their account.  Provide a visual catalog of their selection of movie or music.


Pokémon

Summary:

User can search Pokedex for different Pokémon and add it to their roster.  Trainer can customize their battle roster. 


# Clan members:

## Riki E Plaza
## Stephanie Hill
## Matthew Larkin
## Rui Guo
## Brentice Loper


 
## Presentation: https://docs.google.com/document/d/1_HgmK6XVlzmhJw_lu6SYlb0PMoWW2-JSWUA-_7RyMlw/edit



## Communication Plan:

What hours will you be available to communicate?

Class hours/ 9-6pm/ 1:30 lunch/

What platforms will you use to communicate (ie. Slack, phone …)?

Slack

How often will you take breaks?

Every 45 minutes, more if needed

What is your plan if you start to fall behind?

Don’t fall behind

How will you communicate after hours and on the weekend?

Slack 

What is your strategy for ensuring everyone’s voice is heard?

Taking turns.

How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

Open door policy




## Conflict plan:

What will be your group’s process to resolve conflict, when it arises?

Pokemon Battle, winner takes all. Rap battle

What will your team do if one person is taking over the project and not letting the other members contribute?

Voting system

How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

Help each other, delegate task based on strengths.

How will you raise concerns to members who are not adequately contributing?

Communicate and delegate task, and have frequent check ups so we can keep tabs on everyone progress.

How and when will you escalate the conflict if your resolution attempts are unsuccessful?

Let instructor know the situation and wait for response.






## Work Plan:

How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

Manage project through github projects and set realistic goals.

What project management tool will be used?

Git hub projects, slack., Remo.




## Cooperation plan:

What are the key strengths of each person on the team?

Riki E Plaza - leadership and charisma.

Matthew Larkin: Organized, logical thinking.

Stephanie Hill: creative and likes the design aspects of coding.

Rui Guo: Backend and data communications.

Brentice Loper: Problem solving, and communicates well.


How can you best utilize these strengths in the execution of your project?

Set work goals based on each members strengths and learn from each other.

Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

Work to the strengths of the group and set daily realistic goals.  Frequent check ups, and collabs.




Competencies
In which professional competencies do you each want to develop greater strength?

Riki E Plaza: Creative competencies

Brentice Loper: Collaborations efforts

Stephanie Hill: Craft Competencies

Matthew Larkin: Leadership competencies

Rui Guo: Agile competencies





## Git Process
What components of your project will live on GitHub?

The repo, the project management through github projects.

How will you share the repository with your teammates?

We have all have access to organization

What is your Git flow?

Have all the groups use different branches, and coordinate when to pull.

Will you be using a PR review workflow? If so, consider:

For pull request review, going to go over coordinated merge time.

How many people must review a PR?

2 members

Who merges PRs?

Matthew Larkin in charge of git flow.

How often will you merge?

Daily

How will you communicate that it’s time to merge?

By slack or end of day meeting we will communicate when to merge.





## Wire Frame
![image](https://user-images.githubusercontent.com/105141717/177428845-bef485cb-fa04-4cbf-abae-4e441a115eae.png)

## Domain Model
![image](https://user-images.githubusercontent.com/105141717/177429005-2aa3caee-4bac-4758-a026-5cc49330654c.png)

![image](https://user-images.githubusercontent.com/105141717/177429039-d0cd7b44-a642-4c68-9f48-a42c041a0b4e.png)


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






