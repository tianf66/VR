let config = {
    urls: {
    	home: '/api/index/findIndexResourceList', //首页列表接口
    	imageList: '/api/gallery/findGalleryList',//图集接口,
    	videoList: '/api/video/findCommonVideoList',//普通视频接口
    	vrVideoList: '/api/video/findVrVideoList',//vr视频接口

        vipImageList: '/api/gallery/findNoFreeGalleryList',//收费图集接口
        vipVrVideoList: '/api/video/findNoFreeVrVideoList',//收费视频接口
        vipVideoList: '/api/video/findNoFreeCommonVideoList',//收费VR视频接口

        imageDetail: '/api/gallery/findImgListByGalleryId',//图集详情
        videoDetail: '/api/video/getVideo',//视频详情

        register: '/api/user/register', //注册
        code: '/api/sms/sendSmsCode', //验证码
        login: '/api/user/login', //登录

        token: '/api/user/genToken', //生成token

    }
};

let proxyConfig = {
    urls: {
        home: 'http://172.16.10.195:8081/api/index/findIndexResourceList', //首页列表接口
    	// home: '../static/home.json', //首页列表接口
        imageList: 'http://172.16.10.195:8081/api/gallery/findGalleryList',
    	// imageList: '../static/gallery.json',
        videoList: 'http://172.16.10.195:8081/api/video/findCommonVideoList',
    	// videoList: '../static/findCommonVideoList.json',
        vrVideoList: 'http://172.16.10.195:8081/api/video/findVrVideoList',
    	// vrVideoList: '../static/findVrVideoList.json',
        register: 'http://172.16.10.195:8081/api/user/register',
        code: 'http://172.16.10.195:8081/api/sms/sendSmsCode',
        login: 'http://172.16.10.195:8081/api/user/login', //登录
        vipImageList: 'http://172.16.10.195:8081/api/gallery/findNoFreeGalleryList',//收费图集接口
        vipVrVideoList: 'http://172.16.10.195:8081/api/video/findNoFreeVrVideoList',//收费图集接口
        vipVideoList: 'http://172.16.10.195:8081/api/video/findNoFreeCommonVideoList',//收费图集接口
        imageDetail: 'http://172.16.10.195:8081/api/gallery/findImgListByGalleryId',//图集详情
        // imageDetail: '../static/findImgListByGalleryId.json',//图集详情
        videoDetail: 'http://172.16.10.195:8081/api/video/getVideo',//视频详情
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
