import { DocumentDefinition, FilterQuery } from "mongoose";
import User, {UserDocument} from "../models/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getAllUsers() {
    try {
        const filter = {};
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function findUser(query: FilterQuery<UserDocument>) {
    try {
        const filter = {};
        const user = await User.findOne(query).lean();
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}