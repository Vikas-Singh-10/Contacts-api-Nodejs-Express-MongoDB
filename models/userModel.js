const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add the user name'],
    },
    email:{
        type: String,
        required:[true, 'First add user email'],
        unique: [true, 'Already registered']
    },
    password:{
        type: String,
        required:[true, 'First enter the userPass']
    }
},
{
    timestamp: true
}
)

module.exports = mongoose.model("User", userSchema);