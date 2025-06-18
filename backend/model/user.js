import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6,
    },

    compName: {
      type: String,
      trim: true,
      required: function () {
        return this.userType === "employer";
      },
    },

    userType: {
      type: String,
      enum: ["professional", "employer"],
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     compName: {
//         type: String,
//         // required: true,
//         trim: true,
//     },

//     // roles: {
//     //     type: [String],
//     //     enum: ["professional", "employer"],
//     //     default: ["professional"],
//     //     validate: {
//     //         validator: function(v) {
//     //             return v.length <= 2
//     //         },
//     //         message: props => "User can have only a maximum of two roles"
//     //     }
//     // },

//     // activeRole: {
//     //     type: String,
//     //     enum: ["professional", "employer"],
//     //     // required: true
//     // },

//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// }, {timestamps: true})

// userSchema.pre("save", function (next) {
//     // if(!this.roles.includes(this.activeRole)){
//     //     return next(new Error("Active role must be one the assigned roles."))
//     // }
//     next()
// })

// userSchema.methods.switchRole = async function(newRole) {
//     // if(!this.roles.includes(newRole)){
//     //     throw new Error(`User is already using the "${newRole}" role.`)
//     // }
//     // this.activeRole = newRole
//     await this.save()
//     return this
// }

// const User = mongoose.model("User", userSchema)

// export default User
