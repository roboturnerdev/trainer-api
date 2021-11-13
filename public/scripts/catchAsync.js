module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// this function is a wrapper i can use on async requests
// to clean the code up a bit and add a generic catch