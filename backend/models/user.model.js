import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpiresAt: { type: Date, default: null },
    verificationToken: { type: String, default: null },
    verificationTokenExpiresAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
// This code defines a Mongoose schema and model for a User in a MongoDB database.
// The schema includes fields for name, email, and password, with appropriate validation.
// The model is then exported for use in other parts of the application, such as controllers or services.
// The timestamps option automatically adds createdAt and updatedAt fields to the schema.
// This allows tracking when a user was created and last updated, which can be useful for auditing or debugging purposes.
