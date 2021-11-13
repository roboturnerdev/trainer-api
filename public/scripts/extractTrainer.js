module.exports = (req, res, next) => {
        res.locals.trainer = {
        email: req.body.email,
        phone: req.body.phone,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    };
    next();
};