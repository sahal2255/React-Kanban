const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model using CommonJS module.exports
