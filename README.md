UPDATE: I am refactoring this to use a Controller - Service - Repository design structure. Check the branch 'refactor' to see that.

A friend showed me a job interview question for .NET to create a RESTful API with a few endpoints.

I have attempted to recreate that in JavaScript with Express, Node.js, and a cool in-memory db called loki-js mixed with json validation from ajv.

TO RUN:

cd to root directory of the project

run these two lines:

1. install dependencies
npm i

2. start server
node app.js

connect to app in browser at : localhost:3000/trainers/

POSTMAN used for PUT and PATCH requests.
Content-Type: application/json
Body: raw (JSON)

endpoints:
1. add new trainer: put request to trainers/
2. see all trainers: get request to trainers/
3. update a trainer: patch request to trainers/
4. see one trainer: get request to trainers/:id
