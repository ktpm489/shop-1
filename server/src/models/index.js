var mongoose = require('mongoose');
var config = require('../config');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const UserSchema = new Schema({
    name: {type: String},
    passWord: {type: String},
    telephone: {type: String},
    accessToken: {type: String},
    sex:{type:String},
    age:{type:Number},
    image: {type: String},
    sid: {type: String},
    verifyCode: {type: String},
    collect:{type:Array}
});


const ProductSchema = new Schema({
    title: {type: String},
    price: {type: Number},
    images: {type: Array},
    address: {type: String},
    location: {
        latitude: {type: String},
        longitude: {type: String}
    },
    createTime:{ type: Date, default: Date.now },
    telephone: {type: String},
    category: {type: String},
    description: {type: String},
    tradeType: {type: String},//交易方式
    userId:{type:ObjectId}//发布者id
});


const AreaSchema = new Schema({
    code: {type: Number},
    pcode: {type: Number},
    name: {type: String}
});

const CategorySchema = new Schema({
    name: {type: String}
});

mongoose.connect(config.db, {
    server: {poolSize: 20}
}, function (err) {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
});

module.exports = {
    User: mongoose.model('User', UserSchema),
    Product: mongoose.model('Product', ProductSchema),
    Area: mongoose.model('Area', AreaSchema),
    Category: mongoose.model('Category', CategorySchema)
};
