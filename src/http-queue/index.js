module.exports = function (context, req) {

    context.model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;

    let error = !context.model ? "no data; or invalid payload in body" : null;

    context.res = {
        status: error ? 500 : 200,
        body: error
    };

    context.done(error, context.model);
};