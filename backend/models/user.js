const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  status: { type: Boolean, default: true },
  date: { type: Date, default: Date.now() },
  friends: [ { type: mongoose.Schema.Types.ObjectId, ref: 'user'} ],
  invitations: [ { type: mongoose.Schema.Types.ObjectId, ref: 'user'} ],
  blackList: [ { type: mongoose.Schema.Types.ObjectId, ref: 'user'} ],
});

userSchema.methods.generateJWT = function () {
  return jwt(
    {
      id: this._id,
      name: this.name,
      iat: moment().unix()
    },
    process.env.SECRET_KEYWORD
  );
};

const user = mongoose.model('user', userSchema);
module.exports = user;