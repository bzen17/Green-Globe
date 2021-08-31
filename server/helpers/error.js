module.exports = () => {
    const errorObj = {
        throwInputValidationError: (errorMessage, req, res) =>
            res.status(400).json({
                message:
                    (errorMessage && errorMessage.toString()) ||
                    "Invalid Input,Bad Request!",
                status: "error",
                statusCode: 400
            }),
        throwForbiddenError: (errorMessage, req, res) =>
            res.status(403).json({
                message:
                    (errorMessage && errorMessage.toString()) ||
                    "Access Denied!",
                status: "error",
                statusCode: 403
            }),
        throwUnauthorizedError: (errorMessage, req, res) =>
            res.status(401).json({
                message:
                    (errorMessage && errorMessage.toString()) ||
                    "Unauthorized!",
                status: "error",
                statusCode: 401
            }),
        throwNotFoundError: (errorMessage, req, res) =>
            res.status(404).json({
                message:
                    (errorMessage && errorMessage.toString()) || "Not Found!",
                status: "error",
                statusCode: 404
            }),
        throwInternalServerError: (errorMessage, req, res) =>
            res.status(500).json({
                message:
                    (errorMessage && errorMessage.toString()) ||
                    "Internal Server Error!",
                status: "error",
                statusCode: 500
            }),
        userExistsError: (errorMessage, req, res) =>
            res.status(409).json({
                message:
                    (errorMessage && errorMessage.toString()) ||
                    "User Already Exists!",
                status: "error",
                statusCode: 409
            })
    };

    return errorObj;
};
