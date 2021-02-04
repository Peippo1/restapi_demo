const mongoose = require ("mongoose")


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
},
{timestamps: true}
);

// statics are to create part of the object(blueprint)
userSchema.statics.findByCredentials = async (email, password) => {
  mongoose.models.Users.findOne({email: ' '}, function(email) {console.log(email);})
}
// will the email or password work?
const user = await User.findOne({email: email});
if (!user) {
  throw new Error ("Unable to log in")
};
const passwordMatch = await bcrypt.compare(password, userPassword);
if (!passwordMatch) {
  throw new Error ("Unable to log in")
};

return user;



const User = mongoose.model("User", userSchema);


module.exports = {User,};