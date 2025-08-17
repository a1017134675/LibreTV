const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
  }
     qiqi: {
        api: 'https: //caiji.dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
  }
};

// 合并到全局 API
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
