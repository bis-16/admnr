const Router = require('express')
const router = new Router()
const softController = require('../../controllers/keys/softController')
const checkRole = require('../../middleware/checkRoleMiddleware')

// router.post('/', checkRole('ADMIN'), brandController.create)
router.post('/', softController.create)
// router.post('/')
router.get('/', softController.getAll)

module.exports = router
