let config = {
    urls: {
    	home: '/api/index/findIndexResourceList', //首页列表接口
    	imageList: '/api/gallery/findGalleryList',//图集接口,
    	videoList: '/api/video/findCommonVideoList',//普通视频接口
    	vrVideoList: '/api/video/findVrVideoList',//vr视频接口

        register: '/api/user/register', //注册
        code: '/api/sms/sendSmsCode', //验证码
        login: '/api/user/login', //登录

    }
};

let proxyConfig = {
    urls: {
        // home: 'http://172.16.10.195:8081/api/index/findIndexResourceList', //首页列表接口
    	home: '../static/home.json', //首页列表接口
        // imageList: 'http://172.16.10.195:8081/api/gallery/findGalleryList',
    	imageList: '../static/gallery.json',
        // videoList: 'http://172.16.10.195:8081/api/video/findCommonVideoList',
    	videoList: '../static/findCommonVideoList.json',
        // vrVideoList: 'http://172.16.10.195:8081/api/video/findVrVideoList',
    	vrVideoList: '../static/findVrVideoList.json',
        register: 'http://172.16.10.195:8081/api/user/register',
        code: 'http://172.16.10.195:8081/api/sms/sendSmsCode',
        login: 'http://172.16.10.195:8081/api/user/login', //登录
    }
};

let urls;
if(process.env.NODE_ENV == 'development') {
    urls =  proxyConfig;
} else {
    urls =  config;
}
export default urls;
