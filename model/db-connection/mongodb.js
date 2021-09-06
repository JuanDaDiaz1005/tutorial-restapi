// packages
const mongoose = require("mongoose")
const config = require("config")

const mongodb_Info = config.get("db-connections.mongodb")

const connStr = `mongodb+srv://${mongodb_Info.user}:${mongodb_Info.password}@${mongodb_Info.host}/${mongodb_Info.dbname}?retryWrites=true&w=majority`

module.exports = () => {
    mongoose.connect(connStr)

    mongoose.connection.on("connected", () => {
        console.log("mongodb server connected!")
    })

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnected!")
    })

    mongoose.connection.on("error", () => {
        console.log("mongodb server connection error")
    })

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("mongodb server connected!")
        })
    })
}