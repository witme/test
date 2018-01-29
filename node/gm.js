
//使用im读取文件信息并输出json
var gm = require("gm");

//use imageMagick
var im = gm.subClass({ imageMagick: true });

var f = require("./modules/photo-info/file-list");
var imgs = f.getList("./2017/images");
var outputImg = (function(){
    var ret = [];
    var count = 0;
    imgs.map( (file,idx) =>{
    
        im(file).identify(
            function (err, data) {
                if(!err){
                    var obj = {
                        width: data.size.width,
                        height: data.size.height,
                        image: data.Artifacts.filename.replace("./2017/images/",""),
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
    
    console.log("var imgs = ");
    var t = setInterval(function(){
        if(count == imgs.length){
    
            clearInterval(t);
            console.log(ret);
            console.log("module.exports = imgs;")
        }
    },300);


})();

