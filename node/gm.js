//临时方案

//使用im读取文件信息并输出json
var gm = require("gm");
var f = require("./modules/photo-info/file-list");
var CONST = require("./modules/const");
var path = require('path');
//use imageMagick
var im = gm.subClass({ imageMagick: true }); 

var folderList = f.getSubFolerList(CONST.images);

console.log("要处理以下列表: ", folderList);

console.log("module.exports = gallerys;");
console.log("var gallerys = [");
folderList.map( (folder, idx) =>{
    // console.log( path.join( CONST.images, folder));
    let imgs = f.getList( path.join( CONST.images, folder));
    // console.log('imgs: ',folder, imgs.length);
    outputImg(imgs, folder.trim().replace('\/', ""));
});

//输出语句在最后处理完集中输出
function outputImg(imgs, folder){
    var ret = [];
    var count = 0;

    imgs.map( (file,idx) =>{
        im(file).identify(
            function (err, data) {
                if(!err){
                    var obj = {
                        width: data.size.width,
                        height: data.size.height,
                        image: data.Artifacts.filename.replace(CONST.images, ""),
                        caption: "第 "+ (idx+1) +" 张",
                    }
                    //console.log(obj);
                    ret.push(obj);
                }else{
                    console.log(err);
                }
                count++;
            }
        );
    });
    
    var t = setInterval(function(){
        if(count == imgs.length){

            clearInterval(t);
            // console.log("module.exports = imgs;")
            var out = ["{imgs:", JSON.stringify(ret), ",title: ", '"', folder, '"},'].join("");
           // out = out.substring(out.length-1, 1);
            console.log(out);
        }
    },300);
}

