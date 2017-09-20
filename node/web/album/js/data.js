window.data = window.data || [];

var imgs = [
    "upload_03b86bc5390b1ed65a6778d06713674e_normal.jpg",  
    "upload_04969bdc9a953091ea2fe39c033f6a71_normal.jpg",  
    "upload_0a453564505ef05e113cf9f98ac34d74_normal.jpg",  
    "upload_0f029650139e1ade5145ebdc24cf5ab2_normal.jpg",  
    "upload_134f079e23fd09547fed4a6b182401d8_normal.jpg",  
    "upload_15dac698eac0560abd879dc1b256f80b_normal.jpg",  
    "upload_23c3f8832ea58d2b555836366ab8a84f_normal.jpg",  
    "upload_2b1b8a18e8f2113a343c58a4ae4eaaa6_normal.jpg",  
    "upload_3b306acf02f981a26fdb3ef3b2051a05_normal.jpg",  
    "upload_3ce0d55ed2cbd327079e66f90cf6e8a9_normal.jpg",  
    "upload_3e57d0287793091ab539cc0a74be82b9_normal.jpg",  
    "upload_460b30d4163ffe992c29ca8f30e00278_normal.jpg",  
    "upload_6292829ed09bd9358017222c06b3e466_normal.jpg",  
    "upload_67a0b4bcc8409724eded9beb88a0c197_normal.jpg",  
    "upload_6bb68b8d889c4d749e66db5db6d5b680_normal.jpg",  
    "upload_7896adadb3300b5ac2b864364b644bed_normal.jpg",  
    "upload_89dead1d0a56268cece583b9136e72f3_normal.jpg",  
    "upload_8c16b5c890e09855b55c0beecd31c415_normal.jpg",  
    "upload_8f155c81ae27295b81a11530caca832e_normal.jpg",  
    "upload_8f418179c4b78d6736a7d0f052a42566_normal.jpg",  
    "upload_97006747ffd7e5713f50edd39aaba4bd_normal.jpg",  
    "upload_99e8c6686ea60432b3b6132674b1d673_normal.jpg",  
    "upload_9a8f98c296ffa17f1cec6c6809af2a7f_normal.jpg",  
    "upload_a9ed27811f2639a84f3b79a43710c390_normal.jpg",  
    "upload_aeedbfaf5eaf87ea7ee221a9554a988c_normal.jpg",  
    "upload_b0897519ce0e519f1a816927e935ab9c_normal.jpg",  
    "upload_b21746ee4d914c6b98b076d1c1ea5f04_normal.jpg",  
    "upload_b2afaa7df12bec649ef6d5ed560e3575_normal.jpg",  
    "upload_b414b99eb6e49d305826e99a965a9508_normal.jpg",  
    "upload_b9396fa4c744cf66445d57a5018cdad1_normal.jpg",  
    "upload_bbac9d26113a13be1ddd9b59e3d8d780_normal.jpg",  
    "upload_bec02e8cfcb2aa6d97e4597669c94c28_normal.jpg",  
    "upload_c533fbaa5f2dcc0281facfe1c5279da4_normal.jpg",  
    "upload_cb4ee1c95b8466fb5cca25b371a5b680_normal.jpg",  
    "upload_ce65cbc7c6f64a56aa419f1c1c9ecac6_normal.jpg",  
    "upload_d19e9d82f429b3ed292deed9ddb974b5_normal.jpg",  
    "upload_d2bf7fdcc2c0b436e8e3ab16d96aef6d_normal.jpg",  
    "upload_e07b5693a72ce98ede7886288b74cdc5_normal.jpg",  
    "upload_e8bafb10e51b7019e43596f4eecdb08b_normal.jpg",  
    "upload_ea92ad7c6e350fac2b6e05c49f294a06_normal.jpg",  
    "upload_ef219dde12f570529344559debe11765_normal.jpg",  
    "upload_f17cfa021847ee77fe409902b8aa16bc_normal.jpg",  
    "upload_f3fdee977599b6f8142ca57696922e2e_normal.jpg",  
    "upload_f583abe07027afebe5cea22f7f759e2b_normal.jpg",  
    "upload_f75e03726711fd3afb270d184b388acf_normal.jpg",  
    "upload_f968733338995e95991ffa72fe80ada9_normal.jpg",  
    "upload_fc87fb83042a2413f8efc355d4d61dba_normal.jpg"];
    
    var gallery = {
        galleryTitle : '全部相册',
        figures: []
    };
    
    for(var kk=0; kk<imgs.length; kk++){
        var normal = imgs[kk];
        var thumb = normal.replace('normal', 'thumb');
    
        var obj = {
            imgThumb : '//xixiluo.cn/static/thumb/' + thumb,
            image: '//xixiluo.cn/static/images/' + normal,
            caption: '第' + kk +'张'
        }
    
        gallery.figures.push(obj);
        
    }
    
window.data.push(gallery);