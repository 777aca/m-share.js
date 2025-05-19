import util from "../util.js";

const qqShareJsSdk = "//jsapi.qq.com/get?api=app.setShareInfo,app.share";

export default (type, info) => {
  const doShare = (to_app) => {
    const _doShare = () => {
      try {
        browser.app.share(
          {
            title: info.title,
            description: info.desc,
            url: info.link,
            img_url: info.imgUrl,
            to_app,
          },
          (res) => {}
        );
      } catch (e) {}
    };
    if (window.browser && browser.app && browser.app.share) {
      _doShare();
    } else {
      util.loadScript(qqShareJsSdk, _doShare);
    }
  };
  switch (type) {
    case "wx":
      doShare(1);
      break;
    case "wxline":
      doShare(8);
      break;
    case "qq":
      doShare(4);
      break;
    case "qzone":
      doShare(3);
      break;
    case "weibo":
      doShare(11);
      break;
    case "twitter":
      doShare(12);
      break;
    case "facebook":
      doShare(13);
      break;
  }
};
