const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    douban: {
        api: 'https://caiji.dbzy.tv/api.php/provide/vod',
        name: '豆瓣',
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
    },
    tianya: {
        api: 'https://tyyszyapi.com/api.php/provide/vod',
        name: '天涯影视',
    },
    wangwang: {
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        name: '旺旺资源',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风',
    },
    maoyan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '猫眼',
    },
    dytt: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂',
    },
    jinma: {
        api: 'https://api.jmzy.com/api.php/provide/vod',
        name: '金马',
    },
    iqiyi: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '爱奇艺',
    },
    heimu: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
    },
    feifan: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
