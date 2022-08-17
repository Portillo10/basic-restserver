const { Router } = require('express')

const { UsersGet, UsersPut, UsersPost, UsersPatch, UsersDelete } = require('../controllers/users')

const router = Router()

router.get('/', UsersGet)

router.put('/:id', UsersPut)

router.post('/', UsersPost)

router.patch('/', UsersPatch)

router.delete('/', UsersDelete)

module.exports = router

