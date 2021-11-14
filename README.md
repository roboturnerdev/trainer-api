UPDATE: I am refactoring this to use a Controller - Service - Repository design structure. Check the branch 'refactor' to see that.

A friend showed me a code challenge for C# using .NET to create a "production ready" RESTful API.

I have attempted to recreate that in JavaScript with Express, Node.js, and a cool in-memory db called loki-js.

TO RUN:

    cd to root directory of the project

run: 
    npm install
    
    npm start

I just got it all working after the refactor and still haven't "tidied up".

NEXT UP:
    - Tidy up and remove pre-refactor code
    
    - More detailed error handling, and Add Logging (npm winston)
    
    - Add compression (npm compression)
    
    - Add Testing (npm mocha)

I used Postman to send the GET, PUT, and PATCH requests to the endpoints.

ENDPOINTS:
    - GET '/' See All Trainers
    
    - PUT '/' Add New Trainer
    
    - GET '/:id' See Trainer with ID
    
    - PATCH '/:id' Update Trainer

Any and all feedback is much appreciated! I had a lot of fun learning about the Controller - Serivce - Repository architecture. I read a lot of articles, blog posts, stackoverflow Q/A threads, and more about the topics all night and then more today. Some great practical takeaways from refactoring the project as well. I enjoyed planning the new file directory setup, creating the new structure, and migrating the logic into the right places in the new design pattern.

If you're still reading, thank you! I have only just begun.

contact:

    email: roboturnerdev@gmail.com
    
    twitter: @robo_turner
