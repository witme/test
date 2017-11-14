var gm = require("gm");

//use imageMagick
var im = gm.subClass({ imageMagick: true });


im('IMG_0009.JPG').identify(function (err, data) {
    if(!err){
        console.log(data);
    }else{
        console.log(err);
    }

    
    });