const errorHandlerModule = require("../../helpers/error");
const errorHandler = errorHandlerModule();
const { DirectorySchema } = require("../../models/directorySchema");
const { UserSchema } = require("../../models/userSchema");
const createListing = async (req, res) => {
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
        const obj = new DirectorySchema(body);
        const result = await obj.save().catch((err) => {
            console.log(err);
        });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createListing
};
