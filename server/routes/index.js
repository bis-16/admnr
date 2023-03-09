const Router = require('express')
const router = new Router()
const softRouter = require('./keys/softRouter')
const keyRouter = require('./keys/keyRouter')
// const userRouter = require('./userRouter')

// router.use('/user', userRouter)
router.use('/keys/soft', softRouter)
router.use('/keys/key', keyRouter)

module.exports = router
