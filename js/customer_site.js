const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    mozhu: {
        api: 'https://mozhuazy.com/api.php/provide/vod/?ac=list',
        name: '👖魔爪',
    },
    dytt: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod/?ac=list',
        name: '👖电影天堂',
    },
    douban: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod/from/dbm3u8/at/josn',
        name: '👖豆瓣',
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/from/mtm3u8/at/josn',
        name: '👖茅台',
    },
    ruyi: {
        api: 'http://cj.rycjapi.com/api.php/provide/vod/?ac=list',
        name: '👖如意',
    },
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/?ac=list',
        name: '👖量子',
    },
    wolong: {
        api: 'https://collect.wolongzy.cc/api.php/provide/vod/at/xml/?ac=list',
        name: '👖卧龙',
    },
    baofeng: {
        api: 'http://by.bfzyapi.com/api.php/provide/vod',
        name: '👖暴风',
    },
    zy360: {
        api: 'https://360zyzz.com/api.php/provide/vod/from/360m3u8/at/json',
        name: '👖360',
    },
    jszy: {
        api: 'https://jszyapi.com/api.php/provide/vod/from/jsm3u8/at/json',
        name: '👖极速',
    },
    uku: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod/?ac=list',
        name: '👖U酷',
    },
    tianya: {
        api: 'https://tyyszyapi.com/api.php/provide/vod/?ac=list',
        name: '👖天涯',
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod/?ac=list',
        name: '👖无尽',
    },
    iqiyi: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod/from/snm3u8/at/xml',
        name: '👖iQIYI',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/json',
        name: '👖ikun',
    },
    modu: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod/?ac=list',
        name: '👖魔都',
    },
    baiduyun: {
        api: 'https://api.apibdzy.com/api.php/provide/vod/?ac=list',
        name: '👖百度云',
    },
    shandian: {
        api: 'https://xsd.sdzyapi.com/api.php/provide/vod/?ac=list',
        name: '👖闪电',
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/at/josn',
        name: '👖红牛',
    },
    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '👖光速',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/from/xlm3u8',
        name: '👖新浪',
    },
    kuaiche: {
        api: 'https://caiji.kuaichezy.org/api.php/provide/vod/?ac=list',
        name: '👖快车',
    },
    jinying: {
        api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8/at/json',
        name: '👖金鹰',
    },
    maoyan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '👖猫眼',
    },
    wangwang: {
        api: 'https://api.wwzy.tv/api.php/provide/vod/?ac=list',
        name: '👖旺旺',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/from/hym3u8/at/json',
        name: '👖虎牙',
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/at/json',
        name: '👖豪华',
    },
    subo: {
        api: 'https://subocj.com/api.php/provide/vod/from/subm3u8/at/json',
        name: '👖速播',
    },
    feifan: {
        api: 'http://api.ffzyapi.com/api.php/provide/vod/?ac=list',
        name: '👖非凡',
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod/?ac=list',
        name: '👖樱花',
    },
    youzhi: {
        api: 'http://api.yzzy-api.com/inc/apijson.php?ac=list',
        name: '👖优质',
    },
    yayazy: {
        api: 'https://cj.yayazy.net/api.php/provide/vod/?ac=list',
        name: '👖鸭鸭',
    },
    pubupan: {
        api: 'https://dh.ha.cn/api.php/provide/vod/?ac=list',
        name: '👖瀑布盘',
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod/from/nnm3u8/at/xml',
        name: '👖牛牛',
    },
    zuida: {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: '👖最大',
    },
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '👖飘零',
    },
    zy1080: {
        api: 'https://api.1080zyku.com/inc/apijson.php',
        name: '👖1080',
    },
    shenma: {
        api: 'https://img.smdyw.top/api.php/provide/vod',
        name: '👖神马',
    },
    gzapp: {
        api: 'https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_gzapp.txt',
        name: '👖瓜子影视App',
    },
    gzweb: {
        api: 'https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_gzys.js',
        name: '👖瓜子影视Web',
    },
    xiuluo: {
        api: 'https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_biliys.js',
        name: '👖修罗影视',
    },
    hanju: {
        api: 'https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_hjkk.js',
        name: '👖韩剧看看',
    },
    av4k: {
        api: 'https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Zhi_4kav.js',
        name: '👖4k-av',
    },
    xiaozhang: {
        api: 'https://cdn.jsdelivr.net/gh/YYDS678/uzVideo-extensions@main/vod/js/Pan_xzys.txt',
        name: '👖校长影视',
    },
    bttwo: {
        api: 'https://cdn.jsdelivr.net/gh/yswag/uzVideo@main/js/spider/bttwo.js',
        name: '👖两个BT',
    }
};

// 合并到全局 API
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
