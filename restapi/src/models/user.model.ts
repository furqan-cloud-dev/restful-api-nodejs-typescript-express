import mongoose from "mongoose";


export interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, require: true },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;