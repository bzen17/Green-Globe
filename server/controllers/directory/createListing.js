
const {DirectorySchema} = require('../../models/directorySchema');

const createListing = async (req, res) => {
  try {
    const {body} = req;
    console.log(body)
    const obj = new DirectorySchema(body);
          const result = await obj.save().catch(err=>{
            console.log(err)
          });
          res.send(result);
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  createListing,
};
