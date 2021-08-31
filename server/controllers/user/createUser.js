const errorHandlerModule = require("../../helpers/error");
const errorHandler = errorHandlerModule();
const config = require("../../config/config");
const bcrypt = require("bcryptjs");
const { UserSchema } = require("../../models/userSchema");

const createUser = async (req, res) => {
    try {
        const { body } = req;
        const user = await UserSchema.findOne({ user_id: req.user_id });
        if (!user) {
            return errorHandler.throwNotFoundError(
                "No User Found with your User ID",
                req,
                res
            );
        }
        UserSchema.findOne({ user_id: body.user_id })
            .then(async (user) => {
                if (user) {
                    return errorHandler.userExistsError(
                        "User Already Exists!",
                        req,
                        res
                    );
                } else {
                    const password = await bcrypt.hash(
                        body.password ? body.password : config.defaultPassword,
                        12
                    );
                    const newUser = new UserSchema({ ...body, password });
                    const result = await newUser.save().catch((err) => {
                        return errorHandler.throwInternalServerError(
                            err,
                            req,
                            res
                        );
                    });
                    res.send(result);
                }
            })
            .catch((err) => {
                return errorHandler.throwInternalServerError(err, res, req);
            });
    } catch (error) {
        return errorHandler.throwInternalServerError(
            error && error.message,
            req,
            res
        );
    }
};

module.exports = {
    createUser
};
