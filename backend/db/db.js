const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log("DB connected successfully");
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = connectToDB;