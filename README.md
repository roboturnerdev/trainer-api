# Trainer API Code Challenge

A friend showed me a code challenge for C# using .NET to create a "production ready" RESTful API.

I have attempted to recreate that in JavaScript with Express, Node.js, and a cool in-memory db called loki-js.

# Requirements

Create two REST API endpoints as follows:

Create a new trainer Get details for a trainer The Trainer model should include (at the very least) the following attributes:

I used Postman to send the GET, PUT, and PATCH requests to the endpoints.

<img src="https://i.imgur.com/l0tGdWP.png">

<img src="https://i.imgur.com/pbdgRuj.png">

<img src="https://i.imgur.com/tJKHZwL.png">

UPDATE: I have refactored this to use a Controller - Service - Repository design structure.

ENDPOINTS:

    - GET '/' See All Trainers
    
    - PUT '/' Add New Trainer
    
    - GET '/:id' See Trainer with ID
    
    - PATCH '/:id' Update Trainer

# installation

    cd to root directory of the project

and then run

    npm install
    
    npm start

NEXT UP:
    - Tidy up and remove pre-refactor code
    
    - More detailed error handling, and Add Logging (npm winston)
    
    - Add compression (npm compression)
    
    - Add Testing (npm mocha)

    - Add containerization (docker)

Any and all feedback is much appreciated! I had a lot of fun learning about the Controller - Serivce - Repository architecture. I read a lot of articles, blog posts, stackoverflow Q/A threads, and more about the topics all night and then more today. Some great practical takeaways from refactoring the project as well. I enjoyed planning the new file directory setup, creating the new structure, and migrating the logic into the right places in the new design pattern.

If you're still reading, thank you! I have only just begun.

contact:

    email: roboturnerdev@gmail.com
    
    twitter: @robo_turner
