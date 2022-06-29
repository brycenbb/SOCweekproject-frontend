# BOOTCAMP ADIUTOR

A centralised database for bootcampers to take notes, share resources, and receive help with a built in debugging tool. Built with React, JavaScript, Material UI, Auth0 and Css. Tested with jest, supertest and cypress. 

## Disclaimer:
This project was completed in a group of 4 as part of a 4 day project week during the School of Code bootcamp. I myself independently implemented react router, user authenitcation through auth0, directed the use of Material UI, refined the backend server and database code, and provided general assistance to my team members as a problem solver/debugger. 

## Project Status
This project is currently in development. Users can view and add entries to their diary, look for resources on specific topics, use the panic button to debug their code step by step and be given a list of names of people that are happy to help with a given topic.

## Project Screen Shots

Main Page:

<img src="https://user-images.githubusercontent.com/104023970/176168071-6a5f5480-92b4-4222-9c7d-fed646917e1d.PNG" width="400" height="auto">

Resources feature:

<img src="https://user-images.githubusercontent.com/104023970/176168091-b80685e6-4a20-41fc-a775-73e0fff66e1b.PNG" width="400" height="auto">

Diary feature:

<img src="https://user-images.githubusercontent.com/104023970/176168120-92e3dd7f-788f-4a5f-9033-2bfeff86aecc.PNG" width="400" height="auto">

Diary form:

<img src="https://user-images.githubusercontent.com/104023970/176168131-7b43e3ab-35f0-496c-9ba5-b22231766d69.PNG" width="400" height="auto">

## Installation and Setup Instructions

To get the full experience of the app on your computer, first go to [w9_backend-project-chris-angels](https://github.com/SchoolOfCode/w9_backend-project-chris-angels) and follow installation instructions there to set up your server and database. Log in functionality can be completed by setting up a SPA with auth0 by following the first two steps [here](https://auth0.com/docs/quickstart/spa/react/01-login#install-the-auth0-react-sdk=)

Clone down this repository. You will need node and npm installed on your machine.

### Installation:

npm install

### To Run Test Suite:

npm test

### To Start the App:

npm start

### To Visit App:

localhost:3000

## Reflection
We identified two major problems for bootcampers of School of Code: a lack of long term note storage kept in a centralised database, and a lack of a concrete system for debugging and then asking for help. 

We decided to create a one-stop-shop app for bootcampers to take notes, share resources, and receive help with a built in debugging tool.

The biggest challange while developing this project was the short timeframe of 5 days given to complete it, as well as independent project management that turned out to be more challanging than expected. Trello, Miro and Jamboard proved to be invaluable help to organise our workflow and complete the task on time. Trello was particularly useful for creation and distribution of tickets.

## Tech stack used for this project:
- React
- [React router](https://reactrouter.com/)
- Javascript
- Heroku
- Postgress
- CSS
- [Material UI](https://mui.com/)
- [Express](https://expressjs.com/)
- [Auth0](https://auth0.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)

We decided to use React due to it's flexibility as well as becasue it was the framework most familiar to all the team members. We supported it with Auth0 API to allow users to log-in securely. Material UI allowed us to implement well designed elements quickly which was a big factor in finishing the project on time. As with react, our choice of testing tools like Jest and Supertest relied on their flexibility and familiarity. On the backend we used PostgreSQL in tandem with Heroku because of their simplicity and cost-free implementation, it allowed us to deploy the server and databases for free with enough database storage capacity for our app's needs.

_____________________________________________________________________________________________________________________________________________________

Project Brief from School of Code:

National Bootcamp - Week Nine Project Brief
For your project, you’ll be using what you’ve learned on the course so far to try and improve the lives of your users. In this case, the users will be close to home: bootcampers!

To do this, you’ll need to take the time to understand your user (a bootcamper), their experiences, and their problems. Specifically, it might be good to focus on how to enhance the remote experience of a bootcamper, or what can help them with the vast amount of learning there is to do as a new developer. What do they need? What problem might they have that your application could solve for them? How can you get into the mindset of your user and keep them at the centre of your problem-solving?

The high level outcomes from this project should be:

A minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified
A presentation, complete with how you worked as a team and a demonstration of the project
Your project application might include the following:

Include a user experience created in React
Build a REST API which is used by your front-end
Be supported by a Postgresql database with multiple tables
Be built and managed in an agile way
Utilise testing for ensuring robust code
Remember, you only have a few days to code a solution, so being agile is key. That means brainstorming what you want to build, and working in sprints to deliver value each time. After each sprint, you can reassess and either continue on course or iterate towards a better solution. Have a plan which is incremental steps, rather than all or nothing.
