// const uuid = require('uuid')
// const path = require('path');
const {Emp} = require('../../models/models')
const ApiError = require('../../error/ApiError');

class EmpController {
    async create(req, res, next) {
        console.log("!!!!!!!!!!!!!!.KeyController.create")
        try {
            let {key, version, departamentId, fName, mName, lName, sb, inv, inDate, outDate} = req.body
            // const {img} = req.files
            // let fileName = uuid.v4() + ".jpg"
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const emp = await Emp.create(
              {key, version, departamentId, fName, mName, lName, sb, inv, inDate, outDate}
              );

            // if (info) {
            //     info = JSON.parse(info)
                // info.forEach(i =>
                //     DeviceInfo.create({
                //         title: i.title,
                //         description: i.description,
                //         deviceId: device.id
                //     })
                // )
            // }

            return res.json(theKey)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        console.log("!!!!!!!!!!!!!!.getAll", req.query)
        let {departamentId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let emps;
        if (!departamentId) {
            // keys = await Key.findAndCountAll({limit, offset})
            emps = await Emp.findAndCountAll({})
        }
        if (departamentId) {
            // keys = await Key.findAndCountAll({where:{softId}, limit, offset})
            emps = await Emp.findAndCountAll({where:{departamentId}})
        }
        return res.json(tels)
    }

    async getOne(req, res) {
        const {id} = req.params
        const tel = await Emp.findOne(
            {
                where: {id},
                // include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(tel)
    }
}

module.exports = new EmpController()