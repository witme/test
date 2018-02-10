
var path = require('path');
var gallerys = require("../data.js");

var getGallery = function(req,res,next){

    // var imgs = [
    //     {
    //         image:"upload_03b86bc5390b1ed65a6778d06713674e_normal.jpg",  
    //         caption: '第' + 'kk' +'张',
    //         width: 1024,
    //         height: 768,
    //     }
    // ];

    var result = {
		code: 200,
		data: [],
		msg: "ok"
    };
    
    gallerys && gallerys.map(item=>{

        //img url
        let imgs = item.imgs;
        
    //for
        //一个相册的信息
        var gallery = {
            galleryTitle : item.title || '全部相册', //相册名
            figures: []
        };
        
        for(var kk=0; kk<imgs.length; kk++){
            var normal = imgs[kk].image;
            var thumb = normal.replace('normal', 'thumb');
        
            var obj = {
                imgThumb : "//xixiluo.cn/static"+path.join('/thumb/', thumb),
                image: "//xixiluo.cn/static"+path.join('/images/', normal),
                caption: imgs[kk].caption,
                width: imgs[kk].width,
                height: imgs[kk].height,
            }	
            gallery.figures.push(obj);
            
        }

        result.data.push( gallery);
    //exit-for

    });

	res.json(result);
	next();
}

module.exports = getGallery;