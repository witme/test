$(function(){
  
    function getFigures(figures){
        var list = [];
        for(var kk=0; kk<figures.length; kk++){
            var item = figures[kk];
            list.push({
                imgThumb: item.imgThumb,
                image: item.image,
                caption: item.caption
            })
        }
        
        return list;
    }

    var item = $('#item-dom-template').html();
    var content = "";
   
    for(var k=0; k<data.length; k++){
        var tmp = Mustache.render(item, {
            galleryTitle: data[k].galleryTitle,
            figures: getFigures( data[k].figures),
            
        });
        content += tmp;        
    }
    
    $('#imgDom').append(content);

    initPhotoSwipeFromDOM('.my-gallery');

});