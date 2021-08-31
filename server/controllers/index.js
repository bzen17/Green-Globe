const {createListing} = require('./directory/createListing');
const {getAllListing,getListing} = require('./directory/getListing');
const {createUser} = require('./user/createUser');
const {getUser,getAllUsers,} = require('./user/getUser');
const {deleteUser} = require('./user/deleteUser');
module.exports = {
    createListing,
    getAllListing,
    getListing,
    createUser,
    getUser,
    getAllUsers,
    deleteUser
}