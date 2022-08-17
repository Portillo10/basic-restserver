const express = require('express')
const cors = require('cors')


class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.middlewares()

        this.routes()
    }

    routes(){
        this.app.use('/api', require('../routes/user') )
    }

    middlewares(){

        // cors
        this.app.use(cors())

        // lecture del body

        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto ' + this.port)
        })
    }
}

module.exports = Server