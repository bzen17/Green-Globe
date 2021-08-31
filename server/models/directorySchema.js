const mongoose = require('mongoose');
const {Schema} = mongoose;

const directorySchemaObject = {
  name:{
    type:String,
    required: true
  },
  location:{
      type: [Number]
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
};

const directorySchemaObj = new Schema(directorySchemaObject, {
  timestamps: {createdAt: 'created_at'},
});
  
const DirectorySchema = mongoose.model('Directory', directorySchemaObj, 'directory');
  
module.exports = {DirectorySchema};
