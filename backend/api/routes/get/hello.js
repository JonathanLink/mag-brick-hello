const Boom = require('boom')
const Message =  require('../../models/message')

module.exports.hello = async function hello(request, h) {
    try {
        let message = await Message.findOne()
        return h.response(message)
    } catch (err) {
        throw Boom.badData(err)
    }
}
