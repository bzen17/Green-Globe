const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchemaObject = {
    message: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        trim: true,
        lowercase: true,
        required: "User Id is required"
        // validate: [validateUserId, 'Please fill a valid user_id'],
    },
    directory_id: {
        type: String,
        required: true
    },
    parent_id: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
};

const feedbackSchemaObj = new Schema(feedbackSchemaObject, {
    timestamps: { createdAt: "created_at" }
});

const feedbackSchema = mongoose.model(
    "feedback",
    feedbackSchemaObj,
    "feedback"
);

module.exports = { feedbackSchema };
