const Router = require('express')
const router = new Router()
const softRouter = require('./keys/softRouter')
const keyRouter = require('./keys/keyRouter')
const departmentRouter = require('./tels/departmentRouter')
const telRouter = require('./tels/empRouter')
// const userRouter = require('./userRouter')

// router.use('/user', userRouter)

//keys
router.use('/keys/soft', softRouter)
router.use('/keys/key', keyRouter)

//tels
router.use('/tels/department', departmentRouter)
router.use('/tels/tel', telRouter)

module.exports = router
