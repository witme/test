$(function(){
  
    function getFigures(figures){
        var list = [];
        for(var kk=0; kk<figures.length; kk++){
            var item = figures[kk];
            list.push({
                imgThumb: item.imgThumb,
                image: item.image,
                caption: item.caption,
                width: 1024,
                height: 768,
            })
        }
        
        return list;
    }

    var item = $('#item-dom-template').html();
    var content = "";
   
    for(var k=0; k<Gallerys.length; k++){
        var tmp = Mustache.render(item, {
            galleryTitle: Gallerys[k].galleryTitle,
            figures: getFigures( Gallerys[k].figures),
            
        });
        content += tmp;        
    }
    
    $('#imgDom').append(content);

    initPhotoSwipeFromDOM('.my-gallery');

});