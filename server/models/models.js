const sequelize = require('../db')
const {DataTypes} = require('sequelize')

// const User = sequelize.define('user', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     email: {type: DataTypes.STRING, unique: true,},
//     password: {type: DataTypes.STRING},
//     role: {type: DataTypes.STRING, defaultValue: "USER"},
// })

// const Basket = sequelize.define('basket', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

// const BasketDevice = sequelize.define('basket_device', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

// const Device = sequelize.define('device', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
//     price: {type: DataTypes.INTEGER, allowNull: false},
//     rating: {type: DataTypes.INTEGER, defaultValue: 0},
//     img: {type: DataTypes.STRING, allowNull: false},
// })
//
// const Type = sequelize.define('type', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })
//
// const Brand = sequelize.define('brand', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })

//keys
const Key = sequelize.define('key', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    key: {type: DataTypes.STRING, unique: true, allowNull: false},
    version: {type: DataTypes.STRING, allowNull: false},

    fName: {type: DataTypes.STRING, allowNull: false},
    mName: {type: DataTypes.STRING, allowNull: false},
    lName: {type: DataTypes.STRING, allowNull: false},

    sb: {type: DataTypes.STRING, unique:true, allowNull: false},
    inv: {type: DataTypes.STRING, unique:true, allowNull: false},
    inDate: {type: DataTypes.STRING, allowNull: false},
    outDate: {type: DataTypes.STRING, allowNull: false}
})

const Soft = sequelize.define('soft', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

//tels
const Emp = sequelize.define('emp', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // key: {type: DataTypes.STRING, unique: true, allowNull: false},
    // version: {type: DataTypes.STRING, allowNull: false},

    fName: {type: DataTypes.STRING, allowNull: false},
    mName: {type: DataTypes.STRING, allowNull: false},
    lName: {type: DataTypes.STRING, allowNull: false},

    telOut: {type: DataTypes.STRING, allowNull: false},
    telIn: {type: DataTypes.STRING, unique:true},
    email: {type: DataTypes.STRING, allowNull: false},

    address: {type: DataTypes.STRING, allowNull: false},
    room: {type: DataTypes.STRING},

    // sb: {type: DataTypes.STRING, unique:true, allowNull: false},
    // inv: {type: DataTypes.STRING, unique:true, allowNull: false},
    // inDate: {type: DataTypes.STRING, allowNull: false},
    // outDate: {type: DataTypes.STRING, allowNull: false}
})

const Department = sequelize.define('department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Organization = sequelize.define('organization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


// const Rating = sequelize.define('rating', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     rate: {type: DataTypes.INTEGER, allowNull: false},
// })

// const DeviceInfo = sequelize.define('device_info', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     title: {type: DataTypes.STRING, allowNull: false},
//     description: {type: DataTypes.STRING, allowNull: false},
// })

// const KeyInfo = sequelize.define('key_info', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     title: {type: DataTypes.STRING, allowNull: false},
//     description: {type: DataTypes.STRING, allowNull: false},
// })

// const TypeBrand = sequelize.define('type_brand', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })
// const TypeBrand = sequelize.define('type_brand', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })


// User.hasOne(Basket)
// Basket.belongsTo(User)

// User.hasMany(Rating)
// Rating.belongsTo(User)

// Basket.hasMany(BasketDevice)
// BasketDevice.belongsTo(Basket)

// Type.hasMany(Device)
// Device.belongsTo(Type)

Soft.hasMany(Key)
Key.belongsTo(Soft)

Department.hasMany(Emp)
Emp.belongsTo(Department)

// Brand.hasMany(Device)
// Device.belongsTo(Brand)

// Device.hasMany(Rating)
// Rating.belongsTo(Device)

// Device.hasMany(BasketDevice)
// BasketDevice.belongsTo(Device)

// Device.hasMany(DeviceInfo, {as: 'info'});
// DeviceInfo.belongsTo(Device)

// Key.hasMany(KeyInfo, {as: 'info'});
// KeyInfo.belongsTo(Key)

// Type.belongsToMany(Brand, {through: TypeBrand }) //?????????????????????? ????????????
// Brand.belongsToMany(Type, {through: TypeBrand })

module.exports = {
    // User,
    // Basket,
    // BasketDevice,
    // Device,
    Key,
    Soft,
    Emp,
    Department,
    // Type,
    // Brand,
    // Rating,
    // TypeBrand,
    // DeviceInfo
}





