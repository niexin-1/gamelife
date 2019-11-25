
//选择左侧列表项激活样式
$('.center-left>ul').on('click','li', function (e) {
  //e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active')
    .parent().siblings().children('li').removeClass('active');
});

//充值界面
(function () {
    //选择充值方式
    $('.pay-way').on('click', 'a', function (e) {
        //    e.preventDefault();
        $("#czMethod").val($(this).children('input').val());
        var me = $(e.target);
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children('input').prop('checked', true);
    });
    //选择金额
    $('.money').on('click', 'a', function (e) {
        e.preventDefault();
        $("#chMoney").val($(this).html().replace("元", ""));
        var me = $(e.target);
        me.addClass('active').siblings().removeClass('active');
    })


})();

//密码界面
(function () {
  //$('.tabs').on('click','a', function (e) {
  //  e.preventDefault();
  //  var me=$(e.target);
  //  me.addClass('active').siblings().removeClass('active');
  //  var tabs=$('.tabs a');
  //  var divs=$('.tabs-d');
  //  for(var i=0;i<tabs.length;i++){
  //    if($(tabs[i]).hasClass('active')){
  //      $(divs[i]).addClass('active').siblings().removeClass('active');
  //    }
  //  }
  //});
  $('.sub-tab').on('click','a', function (e) {
    e.preventDefault();
    var me = $(e.target);
    me.addClass('active').siblings().removeClass('active');
    var tabs=$('.sub-tab a');
    var uls=$('.s-pwd');
    for(var i=0;i<tabs.length;i++){
        if ($(tabs[i]).hasClass('active')) {
            $(uls[i]).addClass('active');
        } else {
            $(uls[i]).removeClass('active');
        }
    }
  });
})();
//
(function () {


})();

//订单页面
(function () {
  //选择订单类型
  $('.select').on('click','a', function (e) {
    e.preventDefault();
//    console.log(e.type);
    var me = $(e.target);
    me.addClass('active').siblings().removeClass('active');
    /*
     if(e.type=='click'){
     if(me.html()=='租号中'){
     concatLi1();
     }
     if(me.html()=='待付款'){
     concatLi2();
     }
     if(me.html()=='已完成'){
     concatLi3();
     }
     }
     function concatLi1() {
     var html = '';
     for(var i=0;i<3;i++){
     html+=`
     <li>
     <div class="item-title">
     <b class="state-ing">租号中</b>
     编号：<span class="order-num">10151613513</span>
     上号码：<span id="copy" class="game-num">65a1s6f5w16e1fa3s1fe65a1fa3e65f1</span>
     <a>复制上号码</a>
     </div>
     <div class="item-detail">
     <h3>无神器商城号</h3>
     <p class="detail-row1">
     区服：<span>电信区/湖北电信一区</span>
     角色名：<span>辣鸡</span>
     </p>
     <p class="detail-row2">
     单价：<span><b class="s-price">0.5</b> 元/小时 </span>
     时长：<span><b class="s-time">1</b> 小时 </span>
     租金：<span><b class="s-money1">0.50</b> 元 </span>
     押金：<span><b class="s-money2">0.00</b> 元</span>
     </p>
     <p class="detail-row3">
     开始时间：<span>2017-03-14 23:59:59</span>
     结束时间：<span>2017-03-15 23:59:59</span>
     </p>
     <a href="" class="pay">付款</a>
     <a href="" class="comp">投诉</a>
     </div>
     </li>
     `;
     }
     $('.select-item').html(html);
     }
     function concatLi2() {
     var html = '';
     for(var i=0;i<3;i++){
     html+=`
     <li>
     <div class="item-title">
     <b class="state-to-pay">待付款</b>
     编号：<span class="order-num">10151613513</span>
     上号码：<span class="game-num">75a1s6f5w16e1fa3s1fe65a1fa3e65f1</span>
     <a>复制上号码</a>
     </div>
     <div class="item-detail">
     <h3>无神器商城号</h3>
     <p class="detail-row1">
     区服：<span>电信区/湖北电信一区</span>
     角色名：<span>辣鸡</span>
     </p>
     <p class="detail-row2">
     单价：<span><b class="s-price">0.5</b> 元/小时 </span>
     时长：<span><b class="s-time">1</b> 小时 </span>
     租金：<span><b class="s-money1">0.50</b> 元 </span>
     押金：<span><b class="s-money2">0.00</b> 元</span>
     </p>
     <p class="detail-row3">
     开始时间：<span>2017-03-14 23:59:59</span>
     结束时间：<span>2017-03-15 23:59:59</span>
     </p>
     <a href="" class="pay-con">续租</a>
     </div>
     </li>
     `;
     }
     $('.select-item').html(html);
     }
     function concatLi3() {
     var html = '';
     for(var i=0;i<5;i++){
     html+=`
     <li>
     <div class="item-title">
     <b class="state-done">已完成</b>
     编号：<span class="order-num">10151613513</span>
     上号码：<span class="game-num">85a1s6f5w16e1fa3s1fe65a1fa3e65f1</span>
     <a>复制上号码</a>
     </div>
     <div class="item-detail">
     <h3>无神器商城号</h3>
     <p class="detail-row1">
     区服：<span>电信区/湖北电信一区</span>
     角色名：<span>辣鸡</span>
     </p>
     <p class="detail-row2">
     单价：<span><b class="s-price">0.5</b> 元/小时 </span>
     时长：<span><b class="s-time">1</b> 小时 </span>
     租金：<span><b class="s-money1">0.50</b> 元 </span>
     押金：<span><b class="s-money2">0.00</b> 元</span>
     </p>
     <p class="detail-row3">
     开始时间：<span>2017-03-14 23:59:59</span>
     结束时间：<span>2017-03-15 23:59:59</span>
     </p>
     <a href="" class="pay-again">再租一次</a>
     </div>
     </li>
     `;
     }
     $('.select-item').html(html);
     }
     */

  });
//测试点击选择上号码 复制到剪切板
  $('.item-title').on('click','a', function (e) {
    e.preventDefault();
    var me=$(e.target);
    var value=me.prev('span').html();
    if (window.navigator.userAgent.indexOf('compatible') != -1) {
      //alert('360兼容模式');
      layer.alert('检测到您的浏览器无法正常使用点击复制功能。\n请 手动复制 ' +
        '或更换其他浏览器访问。 谢谢！');
    }
    copyToClipboard(value);
    //alert('复制成功！ 上号码为：'+value+'\n\n可按Ctrl+V进行粘贴');
    layer.msg('复制成功！请 点击右键 或 Ctrl+V 进行粘贴',{
      icon:1,
      time:2000
    });
    function copyToClipboard(value) {
      console.log('abc');
      // 创建元素用于复制
      var aux = document.createElement("input");
      // 获取复制内容
//      var  content=value;
//      var content = document.getElementsByClassName(className)[0].innerHTML || document.getElementsByClassName(className)[0].value;
      // 设置元素内容
      aux.setAttribute("value", value);
      // 将元素插入页面进行调用
      document.body.appendChild(aux);
      // 复制内容
      aux.select();
      // 将内容复制到剪贴板
      document.execCommand("copy");
      // 删除创建元素
      document.body.removeChild(aux);
    }
  });
//翻页效果样式
  $('.pages').on('click','a', function (e) {
    e.preventDefault();
    var pageActive=$('.pages a.page.active');
    var pageAll=$('.pages a.page');
    var me=$(e.target);
    if(me.hasClass('page')){
      me.addClass('active').siblings('.page').removeClass('active');
    }
    //上一页
    if(me.hasClass('prev')){
      if(!pageActive.prev().hasClass('prev')){
        pageActive.prev().addClass('active').siblings('.page').removeClass('active');
      }
    }
    //下一页
    if(me.hasClass('next')){
      if(!pageActive.next().hasClass('next')){
        pageActive.next().addClass('active').siblings('.page').removeClass('active');
      }
    }
    //首页
    if(me.hasClass('first')){
      $(pageAll[0]).addClass('active').siblings('.page').removeClass('active');
    }
    //尾页
    if(me.hasClass('last')){
      $(pageAll[pageAll.length-1]).addClass('active').siblings('.page').removeClass('active');
    }
  });

})();
//个人中心页面
(function () {

})();


function whatBrowser(){
  //document.Browser.Name.value=navigator.appName;
  //document.Browser.Version.value=navigator.appVersion;
  //document.Browser.Code.value=navigator.appCodeName;
  //document.Browser.Agent.value=navigator.userAgent;

  if (window.navigator.userAgent.indexOf('compatible') != -1) {
    //alert('360兼容模式');
    var sub=document.querySelectorAll('.nav li a');
    for(var i=0;i<sub.length;i++){
      sub[i].style.top='-1px';
    }

  }
  if(window.navigator.userAgent.indexOf('AppleWebKit') != -1) {
    //alert('360极速模式');
  }
}
