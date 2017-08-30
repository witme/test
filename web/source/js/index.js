/*
*
*
* 
 */

 $(document).ready(function() {

      var gSlider = null;

     //获取所有数据
     function getHomePage() {
      //test
      var picData = [
        {title:'周一', imgUrl:'./imgs/pics/happybaby-001.jpg'},
        {title:'周二', imgUrl:'./imgs/pics/happybaby-002.jpg'},
        {title:'周三', imgUrl:'./imgs/pics/happybaby-003.jpg'},
        {title:'周四', imgUrl:'./imgs/pics/happybaby-004.jpg'},
        {title:'周五', imgUrl:'./imgs/pics/happybaby-005.jpg'},
        {title:'周六', imgUrl:'./imgs/pics/happybaby-006.jpg'},
        {title:'周天', imgUrl:'./imgs/pics/happybaby-007.jpg'},
      ];

      fillHomePage(picData);
      //
      return;
       $.ajax({
           url: './getPageData',
           data: {
           },
           type: 'get',
           dataType: 'jsonp',
           success: function(rsp){
               if(rsp.code == 200 && rsp.data != null){
                  fillHomePage(rsp.data);
               }else{
                  console.log('出错');
               }
           },
           error: function(err){
              console.log('出错');
      }
        });
     }

     //填充首页
     function fillHomePage(data) {
       //轮播位
       fillSlideList(data);
     }

     //轮播位
     function fillSlideList(param){
       if( !param || param.length == 0) {
         //隐藏轮播位
         return;
       }
 
       param.splice(7);

       var data = param;
       var item = $('#item-slide-tmpl').html();
       var sliderDom = "";
       Mustache.parse(item);
       var sliderSize = data.length;
       var sliderWidth = 100 / sliderSize; //宽度或margin-left
       //当轮播位为1时,隐藏进度条
       if( sliderSize <= 1){
         $('.slider-lines').hide();
       }
       //滑块设置：长度，位置
       $('#slider-select').width( sliderWidth + '%');
       //轮播dom
       for(var kk=0; kk<sliderSize; kk++){
         var tmp = Mustache.render(item, {
           'sliderSrc': data[kk].imgUrl,
           'title': data[kk].title,
         });
         sliderDom += tmp;
       }

       $('.swipe-wrap').append(sliderDom);
       gSlider = new Swipe(
         document.getElementById('slider'),
         {
           startSlide: 0,
           speed: 1000,
           auto: 0,//4000,改成手动触发
           continuous: true, //flase,无法循环. true,导致前后多2张
           stopPropagation: false,
           //chrome下touch事件的bug,https://www.zhihu.com/question/53415395
           transitionEnd: function swipeEnd(idx, elem) { //idx表示滑动后为第几张,data-index
             idx = idx % sliderSize; //若实际为2张图,则idx=1,2,3,0
             if(idx == sliderSize){ //最后一张, 实际为开始那张,0
               idx = 0;
             }
             $('#slider-select').css('margin-left', sliderWidth * idx + '%');
           }
         }
       );
       

       //manually swipe
       setInterval(nextSwipe, 4000);
       function nextSwipe() {
         var cur = gSlider.getPos();
         if( cur + 1 >= gSlider.getNumSlides()){
           gSlider.slide(0, 1000);
         }else{
           gSlider.next();
         }
       }

     }

     getHomePage();

 });
