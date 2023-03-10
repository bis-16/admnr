const {Soft} = require('../../models/models')
const ApiError = require('../../error/ApiError');

class SoftController {
  async create(req, res) {
    const {name, version} = req.body
    const soft = await Soft.create({name, version})
    // const soft = await Soft.create({name})
    return res.json(soft)
  }

  async getAll(req, res) {
    const softs = await Soft.findAll()
    return res.json(softs)
  }

  async getOne(req, res) {
    const {id} = req.params
    const soft = await Soft.findOne(
      {
        where: {id},
      }
    )
    return res.json(soft)
  }

  async delete(req, res) {
    console.log("!!delete")
    const {id} = req.params
    const soft = await Soft.destroy(
      {where: {id}}
    )
    return res.json(soft)
  }

}

module.exports = new SoftController()