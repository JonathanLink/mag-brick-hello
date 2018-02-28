const routes = require('./routes')
const Joi = require('joi')

const API = {
    routes: [{ 
                method: 'GET',
                path: '/hello',
                handler: routes.getHello
            },
            { 
                method: 'PUT',
                path: '/hello',
                handler: routes.putHello
            }]
}

module.exports = API

