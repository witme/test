var path = require('path');

var BASE = path.join(__dirname , '../../2017');
// var BASE = path.join(__dirname , '../../2017');
var CONST = {

    source: path.join(BASE, 'source'), //原始照片目录
    thumb:  path.join(BASE, 'thumb'), //缩略图目录
    images: path.join(BASE, 'images'), //web用正常大图
};

module.exports = CONST;
