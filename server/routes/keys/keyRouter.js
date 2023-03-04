const Router = require('express')
const router = new Router()
const softController = require('../../controllers/keys/keyController')
const checkRole = require('../../middleware/checkRoleMiddleware')

router.post('/', keyController.create)
router.get('/', keyController.getAll)
router.get('/:id', keyController.getOne)

module.exports = router
