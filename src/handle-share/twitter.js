import util from "../util.js";
import qqBrowserShare from "./handle-qqbrowser.js";
import ui from "../ui.js";

export default (info) => {
  if (util.ua.isFromQQBrower) {
    // qq浏览器
    ui.hideMask();
    qqBrowserShare("twitter", info);
    return;
  }

  const query = `url=${encodeURIComponent(
    info.link
  )}&title=${encodeURIComponent(info.desc)}&via=${encodeURIComponent(
    info.link
  )}`;
  location.href = `https://twitter.com/intent/tweet?${query}`;
  // 都不是则弹层二维码提示分享
};
