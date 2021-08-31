const {createListing} = require('./directory/createListing');
const {getAllListing,getListing} = require('./directory/getListing');
const {createUser} = require('./user/createUser');
const {getUser,getAllUsers,} = require('./user/getUser');
const {deleteUser} = require('./user/deleteUser');
const {userLogin} = require('./auth/userLogin');
module.exports = {
    createListing,
    getAllListing,
    getListing,
    createUser,
    getUser,
    getAllUsers,
    deleteUser,
    userLogin
}