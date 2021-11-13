module.exports = (req, res, next) => {
    res.locals.id = req.params.id;
    res.locals.updates = req.body.updates;
    next();
};