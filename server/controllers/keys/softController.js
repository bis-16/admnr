const {Soft} = require('../../models/models')
const ApiError = require('../../error/ApiError');

class SoftController {
    async create(req, res) {
        const {name} = req.body
        const soft = await Soft.create({name})
        return res.json(soft)
    }

    async getAll(req, res) {
        const softs = await Soft.findAll()
        return res.json(softs)
    }

}

module.exports = new SoftController()
