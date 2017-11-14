var r = require("./exif-info.js");
var iconv = require("iconv-lite");


module.exports = {
    getExifJson: function(path_arr, callback){
 
        path_arr.map( path=>{
            
                r.setPath(path);
                Promise.all([
                    r.getHash(), //0 hash
                    //r.getCreateTime(),  //1 create time
                    r.getExif(),
                    r.getSize(), //文件大小
                    r.getPath(), //绝对路径
                    
                ]).then(values =>{
                    return callback(
                        wrapExifJson(values)
                    );
                }).catch(err =>{
                    console.log(err);
                    return callback(err);
                });
            });

    }
};

/*recrusion.getHash(path).then(
    function(value){
        console.log(value);
    },
    function(){
        console.log('failed');
    },

);*/
function wrapExifJson(values){
    var _hash = values[0];
    var _e = values[1];
    var _length = values[2];
    var _path = values[3];

    //_path = iconv.encode(_path, "utf8");
    _path = encodeURIComponent(_path);
    var exif = {
        //hash
        hash: _hash,
        //image
        model: (_e.image && _e.image.Model) || "",
        //exif
        CreateDate: (_e.exif && _e.exif.CreateDate) || "1970:01:01 00:00:01",
        size: _e.exif && [_e.exif.ExifImageWidth, _e.exif.ExifImageHeight].join("x") || "1024x768",
        ISO: _e.exif.ISO,
        //gps
        //经度+纬度,转成地理位置的工具:http://map.yanue.net/
        //度数转小数,http://www.gzhatu.com/du2dfm.html
        gps: _e.gps && JSON.stringify(_e.gps),

        //length
        length: _length,
        //文件路径
        path: _path,

    };

    return exif;
};

function groupPhotoInfo(path){

}





