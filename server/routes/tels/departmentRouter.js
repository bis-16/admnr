const Router = require('express')
const router = new Router()
const departmentController = require('../../controllers/tels/departmentController')
const checkRole = require('../../middleware/checkRoleMiddleware')

// router.post('/', checkRole('ADMIN'), brandController.create)
router.post('/', departmentController.create)
router.get('/', departmentController.getAll)
router.get('/:id([0-9]+)', departmentController.getOne)
router.delete('/:id([0-9]+)', departmentController.delete)

module.exports = router
