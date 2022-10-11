# Branch International - CS Messaging Web App

## About the project :- 
* A messaging app that can be used to respond to incoming questions sent by customers.
* Multiple agents can log in at the same time and respond to incoming messages. {no Authentication provided}.
* ### Additional Feature :- 
    * Implement search functionality to allow agents to search over incoming messages and / or customers.

## Technologies used :-
* ### Frontend :
    * React.js
    * Tailwind  - for styling

* ### Backend :
    * Node.js
    * Express.js
    * MongoDB

## API's used :-
* base url `http://localhost:5000`
* ### END POINTS :
    * `{ /fetchMessages }` : fetch latest unresponded messages of user.
    * `{ /respond }` : store response of perticular user message.
    * `{ /fetchPrevMessages }` : fetch previous conversation between user and agent.
    * `{ /login }` : login an already registered agent.
    * `{ /signup }` : register a new agent.


## Clone this repository  :-
    git clone <link>
## Backend part :-
* Open a Terminal and `cd` to the location of the cloned repo.
* Goto Backend folder `cd backend`
* Install the required packages `npm install`
* Start the backend Server `npm run dev`

## Frontend part :-
* Open a new Terminal and `cd` to the location of the cloned repo.
* Goto Frontend folder `cd backend`
* Install the required packages `npm install`
* Start frontend `npm start`
* Project is running on localhost:3000