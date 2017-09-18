$(function(){
    var data = [
        {
        'galleryTitle': 'galleryTitle',
        'figures': [
            {
                imgThumb: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_m.jpg',
                image: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
                caption: 'caption2'

            },
            {
                imgThumb: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_m.jpg',
                image: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
                caption: 'caption2'

            },
            {
                imgThumb: 'https://farm3.staticflickr.com/2567/5697107145_3c27ff3cd1_m.jpg',
                image: 'https://farm3.staticflickr.com/2567/5697107145_a4c2eaa0cd_o.jpg',
                caption: 'caption1'
            },
            {
                imgThumb: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_m.jpg',
                image: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
                caption: 'caption2'

            }],
        'other':'other'
        },
    ];

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