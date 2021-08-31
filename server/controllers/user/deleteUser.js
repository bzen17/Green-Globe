const errorHandlerModule = require('../../helpers/error');
const {UserSchema} = require('../../models/userSchema');
const errorHandler = errorHandlerModule();

const deleteUser = async (req, res) => {
  const {params} = req;

  try {
   /*  const user = await UserSchema.findOne({user_id: req.user_id});
    if (!user) {
      return errorHandler.throwNotFoundError(
        'No User Found with your User ID',
        req,
        res
      );
    } */
    // ------------role check--------
      const del_user = await UserSchema.findOne({user_id: params.user_id.toLowerCase()});
      if (!del_user) {
        return errorHandler.throwNotFoundError(
          'User does not exists. Invalid Username',
          req,
          res
        );
      }
      const result = await UserSchema.findByIdAndDelete(del_user._id).lean();
      res.send(result);
    
  } catch (error) {
    return errorHandler.throwInternalServerError(
      error&&error.message,
      req,
      res
    );
  }
};

module.exports = {
  deleteUser,
};
