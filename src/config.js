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

        pricePackage: '/api/pricePackage/findAllPricePackageList',//套餐列表
        wxOrder: '/api/pricePackage/userBuyPricePackage',//微信支付
        wxOrderSuccess: '/api/pricePackage/userOrderIsPaySuccess',//微信支付状态查询
        register: '/api/user/register', //注册
        code: '/api/sms/sendSmsCode', //验证码
        login: '/api/user/login', //登录

        token: '/api/user/genToken', //生成token

    }
};

let proxyConfig = {
    urls: {
        home: '/proxy/api/index/findIndexResourceList', //首页列表接口
        galleryList: '/proxy/api/gallery/findGalleryList',
        videoList: '/proxy/api/video/findCommonVideoList',
        vrList: '/proxy/api/video/findVrVideoList',
        register: '/proxy/api/user/register',
        code: '/proxy/api/sms/sendSmsCode',
        login: '/proxy/api/user/login', //登录

        vip_galleryList: '/proxy/api/gallery/findNoFreeGalleryList',//收费图集接口
        vip_vrList: '/proxy/api/video/findNoFreeVrVideoList',//收费vr接口
        vip_videoList: '/proxy/api/video/findNoFreeCommonVideoList',//收费video接口
        freeImageDetail: '/proxy/api/gallery/findFreeImgListByGalleryId',//免费图集详情
        noFreeImageDetail: '/proxy/api/gallery/findNoFreeImgListByGalleryId',//收费图集详情
        freeVideoDetail: '/proxy/api/video/getFreeVideo',//免费视频详情
        noFreeVideoDetail: '/proxy/api/video/getFreeVideo',//收费视频详情
        token: '/proxy/api/user/genToken', //生成token
        pricePackage: '/proxy/api/pricePackage/findAllPricePackageList',//套餐列表
        wxOrder: '/proxy/api/pricePackage/userBuyPricePackage',//微信支付
        wxOrderSuccess: '/proxy/api/pricePackage/userOrderIsPaySuccess',//微信支付状态查询
    }
};

let urls;
if(process.env.NODE_ENV == 'development') {
    urls =  proxyConfig;
} else {
    urls =  config;
}
export default urls;
