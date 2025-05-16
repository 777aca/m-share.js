# [m-share](http://backtonature.github.io/project/m-share.js)

一键分享到微信、朋友圈、新浪微博、QQ 空间、QQ 好友、Facebook、Twitter

[![](http://backtonature.github.io/project/m-share/demo1.png)](http://backtonature.github.io/project/m-share)

点击查看[demo](http://backtonature.github.io/project/m-share/demo/demo.html)

下图为：1. 分享拉窗 2. 右上角提示(微信或手 q 客户端) 3. 弹层提示(其他浏览器)

![](http://backtonature.github.io/project/m-share/demo5.jpg)

## 执行逻辑

| \-             | 微信客户端         | 手 q               | qq 浏览器   | uc 浏览器   | 其他浏览器 |
| -------------- | ------------------ | ------------------ | ----------- | ----------- | ---------- |
| 分享到微信     | 提示点击右上角分享 | 提示点击右上角分享 | native 分享 | native 分享 | 弹层提示   |
| 分享到朋友圈   | 提示点击右上角分享 | 提示点击右上角分享 | native 分享 | native 分享 | 弹层提示   |
| 分享到 qq      | 提示点击右上角分享 | 提示点击右上角分享 | native 分享 | -           | 弹层提示   |
| 分享到 qq 空间 | 提示点击右上角分享 | 提示点击右上角分享 | native 分享 | web 分享    | web 分享   |
| 分享到新浪微博 | web 分享           | web 分享           | web 分享    | web 分享    | web 分享   |

## 安装

有两种安装方式

1.  npm 安装

        npm install m-share

2.  script 引入

        <script src="m-share.js"></script>

## 快速开始

    <div class="m-share"></div>
    <script>
    	const config = {...}; // config配置参考下面“基本使用-配置项”
    	Mshare.init(config);
    </script>

## 配置项

    const config = {
      link:  'http://www.qq.com', // 网址，默认使用window.location.href
      title: '标题',  // 标题，默认读取document.title
      desc:  '分享描述', // 描述, 默认读取<meta name="description" content="desc" />
      imgUrl: 'http://backtonature.github.io/project/m-share/demo1.png' // 图片, 默认取网页中第一个img标签
      types: ['wx', 'wxline', 'qq', 'qzone', 'weibo'], // 启用的社交分享,默认为全部启用
      infoMap: { // 针对不同平台设定不同分享内容
        wx: {
          link: '分享到微信的链接', // 覆盖分享到微信的链接
          title: '分享到微信的标题', // 覆盖分享到微信的标题
          desc: '分享到微信的描述', // 覆盖分享到微信的标题
          imgUrl: '分享到微信的图片链接' // 覆盖分享到微信的图片链接
        }
      },
      fnDoShare(type) {
        // 执行分享的回调，type为'wx', 'wxline', 'qq', 'qzone', 'weibo'
      }
    };

**_注意：_**

1. 所有的配置参数都不是必填项
2. `其他浏览器`并没有开放 native 分享的 api，所以对分享到`微信`、`朋友圈`、`QQ好友`设置的`infoMap`参数，在`其他浏览器`和`手机qq客户端`下不会生效.

## 方法

### init(config) - [demo](http://backtonature.github.io/project/m-share/demo/basic.html)

初始化化页面所有 class 为`m-share`的元素。

### popup(config) - [demo](http://backtonature.github.io/project/m-share/demo/popup.html)

弹出分享弹窗

### wxConfig(config)

若当前页面为公众号页面，具备访问微信 api 的能力，可通过此方法配置微信分享。

    Mshare.wxConfig({
      title: '',
      link: '',
      desc: '',
      imgUrl: '',
      wx: {
        appId: '', // 必填，公众号的唯一标识
        timestamp: , // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '' // 必填，签名
      },
      infoMap: ...
    });

### render(el, config) - [demo](http://backtonature.github.io/project/m-share/demo/el.html)

对指定元素渲染分享 icon，`el`为指定元素或者指定元素的选择器 String。

    <div id="myDom"></div>
    <script>
      Mshare.render('#myDom', config);
      // or Mshare.render(document.querySelector('#myDom', config));
    </script>

### to(type, config) - [demo](http://backtonature.github.io/project/m-share/demo/js-to.html)

js 直接调用分享

    <button id="qq"></button>
    <script>
      document.querySelector('#qq').addEventListener('click', () => {
        Mshare.to('qq', config);
      });
    </script>
