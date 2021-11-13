module.exports = (req, res, next) => {
    res.locals.id = req.params.id;
    next();
};