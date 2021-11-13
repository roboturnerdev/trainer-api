const winston = require('winston');

const logger = winston.createLogger( {
    level: "info",
    format: winston.format.json(),
    defaultMeta: {
        sercice: "smoke-signal-service",
        time: new Date().toISOString()
    },
    transports: [
        // write all logs level info and below to combined.log
        // write all logs error and below to error.log
        new winston.transports.File({filename: "error.log", level: "error"}),
        new winston.transports.File({filename: "combined.log" })
    ]
});

module.exports = logger;