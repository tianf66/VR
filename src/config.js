let config = {
    urls: {
        ads: '//c.bxb.oupeng.com/s',
    	freeVrVideoList: 'http://172.16.10.195:8081/api/video/findNoFreeVrVideoList',
    	detail: '/api/news/getNewsById',
        relateNews: '/api/news/findDetailFeedNewsList',
        isAdForbidden: '/api/adForbidden/isAdForbidden',
    }
};

let urls;
// if(process.env.NODE_ENV == 'development') {
//     urls =  proxyConfig;
// } else {
//     urls =  config;
// }
urls =  config;
export default urls;
