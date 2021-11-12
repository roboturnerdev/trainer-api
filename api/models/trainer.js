const Loki = require('lokijs');

const Ajv = require('ajv');
const ajv = new Ajv();

module.exports = trainerSchema = {
    type: "object",
    properties: {
        firstName: {type: "string"},
        lastName: {type: "string"},
        email: {type: "string"},
        phone: {type: "string"}
    },
    required: ["firstName", "lastName", "email", "phone"]
};