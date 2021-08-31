const {DirectorySchema} = require('../../models/directorySchema');
const errorHandlerModule = require('../../helpers/error');
const errorHandler = errorHandlerModule();

const getListing = async (req, res) => {

  const {params} = req;

  // params id is required
  if (!params.id) {
    return errorHandler.throwInputValidationError(
      'Invalid Input!, User ID is required.',
      req,
      res
    );
  }   
  // query string for db
  const queryString = {_id: params.id};
  try {
    const data = await DirectorySchema.findOne(queryString);
    if (!data) {
      return errorHandler.throwNotFoundError(
        'User does not exists.',
        req,
        res
      );
    }
    return res.json({
      data: data,
      message: 'Success',
    });
  } catch (error) {
    return errorHandler.throwInternalServerError(
      error&&error.message,
      req,
      res
    );
  }
};

const getAllListing = async (req, res) =>{
  try {
    /* const user = await UserSchema.findOne({user_id: req.user_id}).catch(err=>{
      console.log(err)
    });
    if (!user) {
      return errorHandler.throwNotFoundError(
        'No User Found with your User ID',
        req,
        res
      );
    } */
    const data = await DirectorySchema.find({}).catch(err=>{
      console.log(err)
      return errorHandler.throwInternalServerError('Unable to fetch data from Database', req, res);
    });
    if (!data) {
      return errorHandler.throwNotFoundError(
        'No users found.',
        req,
        res
      );
    }
    return res.json({
      data: data,
      message: 'Success',
    });
  } catch (error) {
    console.log(error)
    return errorHandler.throwInternalServerError(
      `Error: ${JSON.stringify(error&&error.message)}`,
      req,
      res
    );
  }
};

module.exports = {
  getListing,
  getAllListing,
};
