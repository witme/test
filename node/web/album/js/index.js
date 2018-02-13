$(function(){
  
    function getFigures(figures){
        var list = [];
        for(var kk=0; kk<figures.length; kk++){
            var item = figures[kk];
            list.push({
                imgThumb: item.imgThumb,
                image: item.image,
                caption: item.caption,
                width: item.width,
                height: item.height,
            })
        }
        
        return list;
    }


    function fillGallery(data){
        var item = $('#item-dom-template').html();
        var content = "";
       
        var Gallerys = data.data;
        for(var k=0; k<Gallerys.length; k++){
            var tmp = Mustache.render(item, {
                galleryTitle: Gallerys[k].galleryTitle,
                figures: getFigures( Gallerys[k].figures),
                
            });
            content += tmp;        
        }
        
        $('#imgDom').append(content);
    
        initPhotoSwipeFromDOM('.my-gallery');
    }

    function ajaxGallery(){

        $.ajax({
            dataType: "json",
            url: "/forward/getGallery",
            success: function(rsp){
                if(rsp.code != 200){
                    console.log("出错");
                    return;
                }
                fillGallery(rsp);

            },
            error: function(){
                alert("err");
            }
        });
    }
   
    ajaxGallery();

});