module.exports = function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
        next(`Validate error: ${error.details.map((x) => x.message).join(", ")}`);
    } else {
        req.body = value;
        next();
    }
};
