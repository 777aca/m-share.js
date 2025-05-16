/*
 * @Author: backtonature
 * @Date: 2018-05-24 14:23:11
 * @Last Modified by: backtonature
 * @Last Modified time: 2018-06-01 15:05:39
 */

import util from "../util.js";
import qqBrowserShare from "./handle-qqbrowser.js";
import ui from "../ui.js";

export default (info) => {
  if (util.ua.isFromQQBrower) {
    // qq浏览器
    ui.hideMask();
    qqBrowserShare("facebook", info);
    return;
  }

  const query = `u=${encodeURIComponent(info.link)}`;
  location.href = `https://www.facebook.com/sharer/sharer.php?${query}`;
  // 都不是则弹层二维码提示分享
};
