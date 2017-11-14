"use strict";
var fs = require('fs');
var crypto = require('crypto');
var ExifImage = require('exif').ExifImage;

var Recrusion = {};

Recrusion.setPath = function(path){
    this.path = path;
};

Recrusion.getPath = function(){
    return this.path;
};
Recrusion.getHash = function(){
    //console.dir("getHash");
    
    var md5sum = crypto.createHash('md5');
    var stream = fs.createReadStream(this.path);

    var promise = new Promise(function(resolve, reject){
        
        stream.on('data', function(chunk) {
            md5sum.update(chunk);
        });
        stream.on('end', function() {
            var str = md5sum.digest('hex').toUpperCase();
            resolve(str);
        });

    });
    return promise;
}

Recrusion.getExif = function(){
    //https://www.npmjs.com/package/exif
    //console.dir("getExif");
    var jpg_file = this.path;
    var promise = new Promise(function(resolve, reject){
        try {
            new ExifImage({ image : jpg_file }, function (error, exifData) {
                if (error){
                     //console.log('Error3: '+error.message);
                     return reject('Error: 无EXIF信息'+error.message);
                }
                else{
                     //console.log(exifData); // Do something with your data! 
                     return resolve(exifData);
                }
                    
            });
        } catch (error) {
            //console.log('Error2: ' + error.message);
            return reject('Error: '+error.message);
        }
    });

    return promise;
  
}

Recrusion.getSize = function(){
       
    var stat = fs.statSync(this.path);
    //console.log(stat);
    var promise = new Promise(
        function(resolve){
            //resolve(stat.birthtimeMs; //转成unix time
            resolve(stat.size); //size
        }
    );
    return promise; 

}

module.exports = Recrusion;