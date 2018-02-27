
'use strict';
const Hapi = require('hapi')
const mongoose = require('mongoose')
const API = require('./api/api.js')
const message = require('./api/models/message.js')

const server = Hapi.Server({ 
    host: '0.0.0.0', 
    port: 8000
})


async function openDatabaseConnection(databaseURL) {
    var success = true
    do {
        mongoose.Promise = global.Promise
        try {
            return await mongoose.connect(databaseURL, { useMongoClient: true })
        } catch (err) {
            success = false
        }
    } while(!success) 
}


async function main() {
   
    try {
        let brickRoutes = API.routes.map(r => { r.path = `/api/brick/${process.env.BRICK_NAME}` + r.path; return r; })
        server.route(brickRoutes)
    } catch (err) {
        console.log(err)
    }

    // Create a server with a host and port
    try {
        await server.start()
        console.log('server running at:', server.info.uri)
    } catch(err) {
        console.log(err)
    }

    // Open connection to mongo database
    const databaseURL = (process.env.NODE_ENV === 'production') ? `mongodb://${process.env.APP_NAME}_${process.env.BRICK_NAME}_mongo_1/${process.env.BRICK_NAME}` : `mongodb://${process.env.BRICK_NAME}_mongo/${process.env.BRICK_NAME}_db_dev?`
    await openDatabaseConnection(databaseURL)
    await message.update({content: "Hello World"}, {$set: {content: "Hello World"}}, {upsert: true})

}

main()

