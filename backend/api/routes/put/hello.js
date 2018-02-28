const Boom = require('boom')
const message =  require('../../models/message')

module.exports.hello = async function hello(request, h) {
    try {
        let payload = JSON.parse(request.payload)
        console.log(payload)
        await message.update({content: "Hello World"}, {$set: {content: payload.content}}, {upsert: true})
        return h.response().code(204)
    } catch (err) {
        throw Boom.badImplementation(err)
    }
}
