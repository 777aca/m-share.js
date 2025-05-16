export default {
  cssText: `
  .m-share-mask {
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2147483646;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
  }
  #m-share-actionSheet {
    margin: 0;
    padding: 0;
    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 2147483647;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px 20px;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-transition: -webkit-transform .2s ease-in;
    transition: transform .2s ease-in;
  }
  #m-share-actionSheet div {
    margin: 0;
    padding: 0;
  }
  #m-share-actionSheet .m-share-sheet-title {
    font-size: 10px;
    color: #ababab;
    text-align: center;
    margin:10px 0 0 0;
  }
  #m-share-actionSheet .m-share-flex {
    display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }
  #m-share-actionSheet .m-share-flex>.m-share-cell {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
    display: block;
    padding: 0!important;
    position: relative;
    text-align: center;
  }
  #m-share-actionSheet .m-share-iconfont {
    margin: 0;
  }
  .m-share-tips {
    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 3px;
    color: #fff;
    right: 20px;
    z-index: 2147483647;
    // background-color: #000;
  }
  .m-share-tips .m-share-tips-w {
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 18px;
    position: relative;
    right: 1px;
    top: 7px;
  }
  .m-share-tips .m-share-tips-w .m-share-tips-p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 18px;
  }
  .m-share-tips-arrow {
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 54px;
    height: 55px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABuCAMAAAD1cAb0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC6UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3HoUvYAAAA9dFJOUwDIjg4CBPr98Av39C4GghgTQOAnv6h97AjcN2dGH+gcbxAVz1WWIqGvuko0tNP+5eN42YhaUF/WmsQ8Y8we7g2hAAAEn0lEQVQYGe3AVXbjSAAF0CcuMZllZnabE6ff/rc1Lqtp5rdVOfORiy9fvnz5nxvg8wyPBT7LY++LhYtPkdw92rXcxCewjivSrnXwCaxO4ZH87uIT5Os+STtKoZ7Z6fNJLFv4BDVKfjqGereM0v0M9QaRoCRSKGflW75kF6h3Zam/MaHaZudRck5dqBZv2yy1BxbUai0mLO1rBRS7zWz+cEigVnoW/GFfv0GpXpTxl0MPKvWiGn9bdaHQ6FjjHyYB1GkNF/yDc+pAnZvu8U+TIIQq6VmQwudPezGFKmmUkdrSoSTae7IZuFBjHmXke/yNktAzkmJoQol4oTn+yWhQct5nO5v0uy5UcOsTTraD+dLn016LNZL+2YUC7ptm3+uxNV1R8jf5xCZt3YUCtbadRTmMK1/01GjYpDObo2rhuEE2jw9gc6DUfjNCvUnapzEqZm0+yMM0BYxZm1IzALoZyXqOaoXdi2+LILZgdnS+3ACkGekceqjWbdhsag88halPqXY1gDxySC0wUaXrTIj6BZKr2Xzy3+YA3K1PsrBQoWDVb0YFXo6aw6f+EE/jq0/6QxfVGUwyMe2EkPKhT0kb4cmM7iSjMSozyLJv3cSCFMY7SqJI8GQNTiTrLqpi6dl7ARMvZo2St73gJdAcOnqOyqwvBX667RyS+2bdhWTGNZucJKiOYeGHgd6k1DZQGtcdOrM1FLC6S0reOkHJ0Gx6kxgKGFe+zKYmSvOZQ0fPocCgT+m0MPBD0ia91RjVGy/7fLLbAX5aR3s6tR4q1zpubUoN/JJopKPFJqrWOXuU3hITP+WRz714oGpu2qeUdQf4xbr2yeYlQcVa75R8/YHfzM3MtrUGqtagZK+O+FNrptXqLioWTPZ88pcu/sW9dBJULH9rUxI9/FeIihnH75T8aQjVrI83vgxzC6oFHx6l1bQF1QbrPqWsMYBqYfKdkr9IoV5EyXtvQL0GJUeru1AuZWkXQ7me4IvoQTkjYymFckaNpQbUq7GkmVCuwdIkMKBaylJ/HUC1nuCLPw2g2HiesTTsWFCrtzmwFG1aUCvpTliKYEKt0a3OUg2qjRoLvrTbBhRzFwuPUraNoVartd3ZlLRtALXcje45lDK9C7VGRYOlfpFCLXdR9yiJZieAUklSu9uUTqeHAaVGRZ2l9iKAUr3edskX73DpQKlH91vTobRr53MoFI47s4ylpZ5DodC9rL8JSnb7fR1DoXFcX3oszd6SFpSxRvGxLhxKTV+fGlCmhaL4nvHF7utTI4QilpV0dU1wT9LhbtfZQJWWMS2W77Qp+X29mMOEEta8NzyfhGNTEoeoMFwoEJrjXqo3DhPalGyxPD/GIf5WksCECRMlE61Rso7P0/u7ECyJg66P5jDxt+LGbHhbB904H82D3nUzvX4s6tru4LHk+dpkuBm0TPw9a6p5XibuWW21qi9PK+/OzLYdPjmO53ur3frozlGN8NHImsJ2bDrc8zeHTbHQ9HN3MDZRmTAdfNxW2/62eRdS29aaK205e/voBrEbomKW1XI7eRFE3eijMdQ7UV4kc8NIYEKZEC6SMAxh4sv/2T8XLefQYLd95QAAAABJRU5ErkJggg==');
    background-size: 100%;
  }
  .m-share-tips-bottom {
    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    font-size: 18px;
    position: fixed;
    color: #fff;
    top: 50%;
    left: 50%;
    width: 100%;
    z-index: 2147483647;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    width: 240px;
    line-height: 1.72;
  }

  @font-face {font-family: "m-share-iconfont";
      src:
       url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
       url('//at.alicdn.com/t/c/font_4923080_mzx5q78x1d.woff?t=1747375672979') format('woff'),
       url('//at.alicdn.com/t/c/font_4923080_mzx5q78x1d.ttf?t=1747375672979') format('truetype');
  }
  .m-share-iconfont {
    font-family:"m-share-iconfont" !important;
    font-size:26px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 5px;
    margin:0 0 0 10px;
  }
  .m-share-iconfont:first-child {
    margin: 0;
  }
  .m-share-iconfont-wx {
    color: #7bc549;
    border: 1px solid #7bc549;
    border-radius: 100%;
  }
  .m-share-iconfont-wx:active {
    background: #7bc549;
    color: #fff;
  }
  .m-share-iconfont-wx:before {
    content: "\\e618";
  }
  .m-share-iconfont-weibo {
    color: #ff763b;
    border: 1px solid #ff763b;
    border-radius: 100%;
  }
  .m-share-iconfont-weibo:active {
    background: #ff763b;
    color: #fff;
  }
  .m-share-iconfont-weibo:before {
    content: "\\e619";
  }
  .m-share-iconfont-qzone {
    color: #fdbe3d;
    border: 1px solid #fdbe3d;
    border-radius: 100%;
  }
  .m-share-iconfont-qzone:active {
    background: #fdbe3d;
    color: #fff;
  }
  .m-share-iconfont-qzone:before {
    content: "\\e61e";
  }
  .m-share-iconfont-qq {
    color: #56b6e7;
    border: 1px solid #56b6e7;
    border-radius: 100%;
  }
  .m-share-iconfont-qq:active {
    background: #56b6e7;
    color: #fff;
  }
  .m-share-iconfont-qq:before {
    content: "\\e61a";
  }
  .m-share-iconfont-twitter {
    color: #56b6e7;
    border: 1px solid #56b6e7;
    border-radius: 100%;
  }
  .m-share-iconfont-twitter:active {
    background: #56b6e7;
    color: #fff;
  }
  .m-share-iconfont-twitter:before {
    content: "\\e61b";
  }
  .m-share-iconfont-facebook {
    color: #56b6e7;
    border: 1px solid #56b6e7;
    border-radius: 100%;
  }
  .m-share-iconfont-facebook:active {
    background: #56b6e7;
    color: #fff;
  }
  .m-share-iconfont-facebook:before {
    content: "\\e61f";
  }
  .m-share-iconfont-wxline {
    color: #33b045;
    border: 1px solid #33b045;
    border-radius: 100%;
  }
  .m-share-iconfont-wxline:active {
    background: #33b045;
    color: #fff;
  }
  .m-share-iconfont-wxline:before {
    content: "\\e617";
  }
  .m-share-iconfont-menu {
    font-size: 12px;
  }
  .m-share-iconfont-menu:before {
    content: "\\e61d";
  }
  .m-share-iconfont-dots {
    font-size: 25px;
    color: #fff;
  }
  .m-share-iconfont-dots:before {
    content: "\\e61c";
  }
  .m-share-iconfont-share {
    font-size: 17px;
    color: #fff;
    margin: 0;
  }
  .m-share-iconfont-share:before {
    content: "\\e620";
  }
  `,
};
