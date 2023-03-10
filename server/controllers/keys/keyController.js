// const uuid = require('uuid')
// const path = require('path');
const {Key} = require('../../models/models')
const ApiError = require('../../error/ApiError');

class KeyController {
    async create(req, res, next) {
        console.log("!!!!!!!!!!!!!!.KeyController.create")
        try {
        //     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        //     key: {type: DataTypes.STRING, unique: true, allowNull: false},
        //     version: {type: DataTypes.STRING, allowNull: false},
        //
        //     fName: {type: DataTypes.STRING, allowNull: false},
        //     sName: {type: DataTypes.STRING, allowNull: false},
        //     lName: {type: DataTypes.STRING, allowNull: false},
        //
        //     sb: {type: DataTypes.STRING, unique:true, allowNull: false},
        //     inv: {type: DataTypes.STRING, unique:true, allowNull: false},
        // in: {type: DataTypes.STRING, allowNull: false},
        //     out: {type: DataTypes.STRING, allowNull: false}
        //
            let {key, version, softId, fName, mName, lName, sb, inv, inDate, outDate} = req.body
            // const {img} = req.files
            // let fileName = uuid.v4() + ".jpg"
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const theKey = await Key.create(
              {key, version, softId, fName, mName, lName, sb, inv, inDate, outDate}
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
        let {softId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let keys;
        if (!softId) {
            // keys = await Key.findAndCountAll({limit, offset})
            keys = await Key.findAndCountAll({})
        }
        if (softId) {
            // keys = await Key.findAndCountAll({where:{softId}, limit, offset})
            keys = await Key.findAndCountAll({where:{softId}})
        }
        return res.json(keys)
    }

    async getOne(req, res) {
        const {id} = req.params
        const key = await Key.findOne(
            {
                where: {id},
                // include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(key)
    }
}

module.exports = new KeyController()