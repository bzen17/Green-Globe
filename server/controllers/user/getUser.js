const { UserSchema } = require("../../models/userSchema");
const errorHandlerModule = require("../../helpers/error");
const errorHandler = errorHandlerModule();

const getUser = async (req, res) => {
    const { params } = req;

    // params id is required
    if (!params.user_id) {
        return errorHandler.throwInputValidationError(
            "Invalid Input!, User ID is required.",
            req,
            res
        );
    }
    // query string for db
    const queryString = { user_id: params.user_id };
    try {
        const data = await UserSchema.findOne(queryString);
        if (!data) {
            return errorHandler.throwNotFoundError(
                "User does not exists.",
                req,
                res
            );
        }
        return res.json({
            data: data,
            message: "Success"
        });
    } catch (error) {
        return errorHandler.throwInternalServerError(
            error && error.message,
            req,
            res
        );
    }
};

const getAllUsers = async (req, res) => {
    try {
        const user = await UserSchema.findOne({ user_id: req.user_id }).catch(
            (err) => {
                console.log(err);
            }
        );
        if (!user) {
            return errorHandler.throwNotFoundError(
                "No User Found with your User ID",
                req,
                res
            );
        }
        const data = await UserSchema.find({})
            .select("-password -__v")
            .catch((err) => {
                console.log(err);
                return errorHandler.throwInternalServerError(
                    "Unable to fetch data from Database",
                    req,
                    res
                );
            });
        if (!data) {
            return errorHandler.throwNotFoundError("No users found.", req, res);
        }
        return res.json({
            data: data,
            message: "Success"
        });
    } catch (error) {
        console.log(error);
        return errorHandler.throwInternalServerError(
            `Error: ${JSON.stringify(error && error.message)}`,
            req,
            res
        );
    }
};

module.exports = {
    getUser,
    getAllUsers
};
