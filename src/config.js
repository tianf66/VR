let config = {
    urls: {
    	home: '/api/index/findIndexResourceList', //首页列表接口
    	galleryList: '/api/gallery/findGalleryList',//普通图集接口,
    	videoList: '/api/video/findCommonVideoList',//普通视频接口
    	vrList: '/api/video/findVrVideoList',//vr视频接口

        vip_galleryList: '/api/gallery/findNoFreeGalleryList',//收费图集接口
        vip_videoList: '/api/video/findNoFreeCommonVideoList',//收费VR视频接口
        vip_vrList: '/api/video/findNoFreeVrVideoList',//收费视频接口

        freeImageDetail: '/api/gallery/findFreeImgListByGalleryId',//免费图集详情
        noFreeImageDetail: '/api/gallery/findNoFreeImgListByGalleryId',//收费图集详情
        freeVideoDetail: '/api/video/getFreeVideo',//免费视频详情
        noFreeVideoDetail: '/api/video/getFreeVideo',//收费视频详情


        register: '/api/user/register', //注册
        code: '/api/sms/sendSmsCode', //验证码
        login: '/api/user/login', //登录

        token: '/api/user/genToken', //生成token

    }
};

let proxyConfig = {
    urls: {
        // home: 'http://172.16.10.195:8081/api/index/findIndexResourceList', //首页列表接口
    	home: '../static/home.json', //首页列表接口
        // galleryList: 'http://172.16.10.195:8081/api/gallery/findGalleryList',
    	galleryList: '../static/gallery.json',
        // videoList: 'http://172.16.10.195:8081/api/video/findCommonVideoList',
    	videoList: '../static/findCommonVideoList.json',
        // vrList: 'http://172.16.10.195:8081/api/video/findVrVideoList',
    	vrList: '../static/findVrVideoList.json',
        register: 'http://172.16.10.195:8081/api/user/register',
        code: 'http://172.16.10.195:8081/api/sms/sendSmsCode',
        login: 'http://172.16.10.195:8081/api/user/login', //登录

        // vip_galleryList: 'http://172.16.10.195:8081/api/gallery/findNoFreeGalleryList',//收费图集接口
        vip_galleryList: '../static/gallery.json',//收费图集接口

        // vip_vrList: 'http://172.16.10.195:8081/api/video/findNoFreeVrVideoList',//收费vr接口
        vip_vrList: '../static/findVrVideoList.json',//收费vr接口

        // vip_videoList: 'http://172.16.10.195:8081/api/video/findNoFreeCommonVideoList',//收费video接口
        vip_videoList: '../static/findCommonVideoList.json',//收费video接口

        // imageDetail: '../static/findImgListByGalleryId.json',//图集详情
        freeImageDetail: 'http://172.16.10.195:8081/api/gallery/findFreeImgListByGalleryId',//免费图集详情
        noFreeImageDetail: 'http://172.16.10.195:8081/api/gallery/findNoFreeImgListByGalleryId',//收费图集详情
        freeVideoDetail: 'http://172.16.10.195:8081/api/video/getFreeVideo',//免费视频详情
        noFreeVideoDetail: 'http://172.16.10.195:8081/api/video/getFreeVideo',//收费视频详情
        token: 'http://172.16.10.195:8081/api/user/genToken', //生成token
    }
};

let urls;
if(process.env.NODE_ENV == 'development') {
    urls =  proxyConfig;
} else {
    urls =  config;
}
export default urls;
