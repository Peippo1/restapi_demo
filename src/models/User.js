const mongoose = require ("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    // name ,email, password
    name: {
        type: String,
        required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
// unique enforces that there cannot be duplicate emails.

    //   validate (value) {
    //     if (!validator.isEmail(value)) {
    //         throw new Error("Invalid Email")  
    //   } 
    },
    password: {
    type: String,
    required: true,
},

  tokens: [ 
    {
      token: {
        type: String,
      },
    },
  ],
},
{timestamps: true}
);

// statics are to create part of the object(blueprint)
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);
  if (!passwordsMatch) {
    throw new Error("Unable to login");
  }

  return user;
};




userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({_id: this._id}, process.env.SECRET, {expiresIn: "5 weeks"});
  this.tokens.push({ token });
  return token;
};



const User = mongoose.model("User", userSchema);


module.exports = {
  User,
};