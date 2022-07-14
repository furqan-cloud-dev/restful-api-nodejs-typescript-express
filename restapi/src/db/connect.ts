import mongoose from "mongoose";

function connect() {
    const dbUri = 'mongodb://localhost:27017/testing'

    return mongoose
    .connect(dbUri)
    .then(() => { 
        console.log("database connected");
    })
    .catch((error) => {
        console.error("db error", error);
    });
    
}

export default connect;