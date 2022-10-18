const mongoose = require('mongoose');

// MONGO_URl="mongodb+srv://admin:admin123@cluster0.mwiw1m0.mongodb.net/users?retryWrites=true&w=majority"

const connectDB = async() => {
    try{
        //mongodb connection string
        const con = await mongoose.connect("mongodb+srv://admin:admin123@cluster0.mwiw1m0.mongodb.net/users?retryWrites=true&w=majority",{
            // useNewUralParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        })

        console.log(`MongoDB connected:${con.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB