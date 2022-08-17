const { response, request } = require('express')

const UsersGet = (req = request, res = response) => {
    const params = req.query

    res.json({
        msg: 'Get api - controller',
        params
    })
}
const UsersPut = (req, res = response) => {
    const id = req.params.id

    res.json({
        msg: 'Put api - controller',
        id
    })
}
const UsersPost = (req, res = response) => {

    const body = req.body
    res.json({
        msg: 'Post api - controller',
        body
    })
}
const UsersPatch = (req, res = response) => {
    res.json({
        msg: 'Patch api - controller'
    })
}
const UsersDelete = (req, res = response) => {
    res.json({
        msg: 'Delete api - controller'
    })
}

module.exports = {
    UsersGet,
    UsersPut,
    UsersPost,
    UsersPatch,
    UsersDelete
}