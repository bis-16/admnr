const {Department} = require('../../models/models')
const ApiError = require('../../error/ApiError');

class DepartmentController {
  async create(req, res) {
    const {name, version} = req.body
    const department = await Department.create({name, version})
    return res.json(department)
  }

  async getAll(req, res) {
    const departments = await Department.findAll()
    return res.json(departments)
  }

  async getOne(req, res) {
    const {id} = req.params
    const department = await Department.findOne(
      {
        where: {id},
      }
    )
    return res.json(department)
  }

  async delete(req, res) {
    console.log("!!delete")
    const {id} = req.params
    const department = await Departament.destroy(
      {where: {id}}
    )
    return res.json(department)
  }

}

module.exports = new DepartmentController()