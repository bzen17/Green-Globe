const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchemaObject = {
  name: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'User Id is required',
    // validate: [validateUserId, 'Please fill a valid user_id'],
  },
  role: {
    type: String,
    enum: [
      'admin',
      'owner',
      'user',
    ],
    required: true,
  },
  password: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  }
};

const userSchemaObj = new Schema(userSchemaObject, {
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'},
});

const UserSchema = mongoose.model('User', userSchemaObj, 'users');

module.exports = {UserSchema};
