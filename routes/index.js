const TrainersRouter = require('./router');

const routes = app => {
    console.log('inside router function');
    
    // middleware before the router
    app.use( ( req, res, next ) => {
        console.log('inside headers middleware');
        res.setHeader( "Access-Control-Allow-Origin", "*" );
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET,  PUT, PATCH"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "X-Requested-With, content-type, x-access-token, authorization"
        );
        res.setHeader( "Access-Control-Allow-Credentials", true );
        res.removeHeader( "X-Powered-By" );
        next();
    });

    app.use('/', TrainersRouter);
};

module.exports = routes;