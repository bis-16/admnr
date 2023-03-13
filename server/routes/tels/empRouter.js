const Router = require('express')
const router = new Router()
const empController = require('../../controllers/tels/empController')
const checkRole = require('../../middleware/checkRoleMiddleware')

router.post('/', empController.create)
router.get('/', empController.getAll)
router.get('/:id', empController.getOne)

module.exports = router
