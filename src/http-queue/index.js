module.exports = function (context, req) {
    let message = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let error = message == null ? "no data; or invald payload in body" : null;

    context.done(error, message);
};