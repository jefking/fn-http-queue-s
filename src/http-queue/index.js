module.exports = function (context, req) {
    let message = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let error = !message ? "no data; or invald payload in body" : null;

    context.res = {
        status: error ? 500 : 200,
        body: error
    };

    context.done(error, message);
};