var base=function(){var e,t=function(t){clearTimeout(e);var n=$("#toast");n.length>0?(n.find(".inner").text(t),n.show()):(n=$('<div id="toast" class="toast" style="display:block"><span class="inner">'+t+"</span></div>"),$(document.body).append(n)),e=setTimeout(function(){n.hide()},2e3)},n=function(){for(var e=["热门"],t=0;t<26;t++)e.push(String.fromCharCode(65+t));return e},a=function(){function e(e){var t,n=e.naturalHeight,a=document.createElement("canvas");a.width=1,a.height=n;var o=a.getContext("2d");o.drawImage(e,0,0);try{t=o.getImageData(0,0,1,n).data}catch(e){return console.log("Cannot check verticalSquash: CORS?"),1}for(var r=0,i=n,l=n;l>r;){0===t[4*(l-1)+3]?i=l:r=l,l=i+r>>1}var s=l/n;return 0===s?1:s}function t(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),a=new Uint8Array(n),o=0;o<t.length;o++)a[o]=t.charCodeAt(o);return n}function n(e){var n=e.split(",")[0].split(":")[1].split(";")[0],a=t(e);return new Blob([a],{type:n})}function a(e){var t=new DataView(e);if(65496!=t.getUint16(0,!1))return-2;for(var n=t.byteLength,a=2;a<n;){var o=t.getUint16(a,!1);if(a+=2,65505==o){if(1165519206!=t.getUint32(a+=2,!1))return-1;var r=18761==t.getUint16(a+=6,!1);a+=t.getUint32(a+4,r);var i=t.getUint16(a,r);a+=2;for(var l=0;l<i;l++)if(274==t.getUint16(a+12*l,r))return t.getUint16(a+12*l+8,r)}else{if(65280!=(65280&o))break;a+=t.getUint16(a,!1)}}return-1}function o(e,t,n){var a=e.width,o=e.height;switch(n>4&&(e.width=o,e.height=a),n){case 2:t.translate(a,0),t.scale(-1,1);break;case 3:t.translate(a,o),t.rotate(Math.PI);break;case 4:t.translate(0,o),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-o);break;case 7:t.rotate(.5*Math.PI),t.translate(a,-o),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-a,0)}}function r(r,i,l){var s=new FileReader;s.onload=function(s){if(!1===i.compress)return r.base64=s.target.result,void l(r);var c=new Image;c.onload=function(){var s=e(c),u=a(t(c.src)),d=document.createElement("canvas"),f=d.getContext("2d"),A=i.compress.width,p=i.compress.height,h=c.width,g=c.height,m=void 0;if(h<g&&g>p?(h=parseInt(p*c.width/c.height),g=p):h>=g&&h>A&&(g=parseInt(A*c.height/c.width),h=A),d.width=h,d.height=g,u>0&&o(d,f,u),f.drawImage(c,0,0,h,g/s),m=/image\/jpeg/.test(r.type)||/image\/jpg/.test(r.type)?d.toDataURL("image/jpeg",i.compress.quality):d.toDataURL(r.type),"file"==i.type)if(/;base64,null/.test(m)||/;base64,$/.test(m))console.warn("Compress fail, dataURL is "+m+". Next will use origin file to upload."),l(r);else{var y=n(m);y.id=r.id,y.name=r.name,y.lastModified=r.lastModified,y.lastModifiedDate=r.lastModifiedDate,l(y)}else/;base64,null/.test(m)||/;base64,$/.test(m)?(i.onError(r,new Error("Compress fail, dataURL is "+m+".")),l()):(r.base64=m,l(r))},c.src=s.target.result},s.readAsDataURL(r)}function i(e){var t=e.url,n=e.file,a=e.fileVal,o=e.onBeforeSend,r=e.onProgress,i=e.onError,l=e.onSuccess,s=e.xhrFields,c=n.name,u=n.type,d=n.lastModifiedDate,f={name:c,type:u,size:"file"http://z.8868.cn/pcassets/js/_common/js/==e.type?n.size:n.base64.length,lastModifiedDate:d},A={};if(!1!==o(n,f,A)){n.status="progress",r(n,0);var p=new FormData,h=new XMLHttpRequest;n.xhr=h,Object.keys(f).forEach(function(e){p.append(e,f[e])}),"file"http://z.8868.cn/pcassets/js/_common/js/==e.type?p.append(a,n,c):p.append(a,n.base64),h.onreadystatechange=function(){if(4==h.readyState)if(200==h.status)try{var e=JSON.parse(h.responseText);l(n,e)}catch(e){i(n,e)}else i(n,new Error("XMLHttpRequest response status is "+h.status))},h.upload.addEventListener("progress",function(e){if(0!=e.total){var t=100*Math.ceil(e.loaded/e.total);r(n,t)}},!1),h.open("POST",t),Object.keys(s).forEach(function(e){h[e]=s[e]}),Object.keys(A).forEach(function(e){h.setRequestHeader(e,A[e])}),h.send(p)}}function l(e,t){function n(e,t){var n=e.find('[data-id="'+t+'"]'),a=n.find(".uploader__file-content");return a.length||(a=$('<div class="uploader__file-content"></div>'),n.append(a)),n.addClass("uploader__file_status"),a}function a(e,t){e.find('[data-id="'+t+'"]').removeClass("uploader__file_status").find(".uploader__file-content").remove()}function o(e){e.url=l.createObjectURL(e),e.status="ready",e.upload=function(){r.upload($.extend({$uploader:i,file:e},t))},e.stop=function(){this.xhr.abort()},t.onQueued(e),t.auto&&e.upload()}var r=this,i=$(e),l=window.URL||window.webkitURL||window.mozURL;if(t=$.extend({url:"",auto:!0,type:"file",fileVal:"file",xhrFields:{},onBeforeQueued:$.noop,onQueued:$.noop,onBeforeSend:$.noop,onSuccess:$.noop,onProgress:$.noop,onError:$.noop},t),!1!==t.compress&&(t.compress=$.extend({width:1600,height:1600,quality:.8},t.compress)),t.onBeforeQueued){var c=t.onBeforeQueued;t.onBeforeQueued=function(e,t){var n=c.call(e,t);if(!1===n)return!1}}if(t.onQueued){var u=t.onQueued;t.onQueued=function(e){if(!u.call(e)){i.find('[data-id="'+e.id+'"]').css({backgroundImage:'url("'+(e.base64||e.url)+'")'}),t.auto||a(i,e.id)}}}if(t.onBeforeSend){var d=t.onBeforeSend;t.onBeforeSend=function(e,t,n){if(!1===d.call(e,t,n))return!1}}if(t.onSuccess){var f=t.onSuccess;t.onSuccess=function(e,t){e.status="success",f.call(e,t)||a(i,e.id)}}if(t.onProgress){var A=t.onProgress;t.onProgress=function(e,t){A.call(e,t)||n(i,e.id).html(t+"%")}}if(t.onError){var p=t.onError;t.onError=function(e,t){e.status="fail",p.call(e,t)||n(i,e.id).html('<i class="icon-warn"></i>')}}i.find('input[type="file"]').on("change",function(e){var n=e.target.files;0!==n.length&&(!1===t.compress&&"file"http://z.8868.cn/pcassets/js/_common/js/==t.type?Array.prototype.forEach.call(n,function(e){e.id=++s,!1!==t.onBeforeQueued(e,n)&&o(e)}):Array.prototype.forEach.call(n,function(e){e.id=++s,!1!==t.onBeforeQueued(e,n)&&r.compress(e,t,function(e){e&&o(e)})}),this.value="")})}var s=0;return{compress:r,upload:i,uploader:l}}(),o=function(e,t){var n=0;a.uploader("#"+e+"-uploader",{url:"/rent/uploadImg",auto:!0,type:"file",fileVal:"file",compress:{width:1e3,height:1e3,quality:.8},onBeforeQueued:function(a){return["image/jpg","image/jpeg","image/png","image/gif"].indexOf(this.type)<0?(alert("请上传图片"),!1):this.size>10485760?(alert("请上传不超过10M的图片"),!1):a.length>t||$("#"+e+"-uploader img").length>5?(alert("最多只能上传"+t+"张图片，请重新选择"),!1):n+1>t?(alert("最多只能上传"+t+"张图片"),!1):(++n,!0)},onQueued:function(){},onBeforeSend:function(){},onProgress:function(e){},onSuccess:function(t){if(0==t.code){var n=$('<li class="item"><button type="button" class="rent-imgBtn">删除</button><div class="rent-imgWrapper"><div class="rent-imgBox"><img src="'+t.url+'" alt=""></div></div><input type="hidden" name="pic" value="'+t.url+'"></li>');$("#"+e+"-uploader-btn").before(n)}return!0},onError:function(e){}}),$("#"+e+"-uploader").on("click",function(e){var t=$(e.target),a=t.closest(".item");n>0&&(n-=1),a.remove()})},r=function(e,t,n){if($(t).on("click",function(){$("#"+e+"-dialog").show(),$("body").css("overflow-y","hidden")}),$("#"+e+"-cancel").on("click",function(){$("#"+e+"-dialog").hide(),$("body").css("overflow-y","auto")}),n&&(n instanceof Function&&$("#"+e+"-dialog").on("submit",function(t){return n(t,"#"+e+"-dialog")}),n instanceof Object))for(k in n)$("#"+e+"-dialog").on(k,function(t){return n[k](t,"#"+e+"-dialog")})},i=function(e,t,n,a,o){$(t).on("click",function(){$("#"+e+"-simple-dialog").show(),$("body").css("overflow-y","hidden"),n&&n(this)}),$("#"+e+"-simple-dialog-close").on("click",function(){$("#"+e+"-simple-dialog").hide(),a&&a(this),$("body").css("overflow-y","auto")}),o&&$("#"+e+"-simple-dialog-submit").on("click",function(){$("#"+e+"-simple-dialog").hide(),o(this),$("body").css("overflow-y","auto")})},l=function(e,t){$(e).on("click",function(){var e=$(t),n=$(this);"password"==e.attr("type")?($(t).attr("type","text"),n.attr("src","../../../../icons/eyesopen.png"/*tpa=http://z.8868.cn/icons/eyesopen.png*/)):($(t).attr("type","password"),n.attr("src","../../../../icons/eyesclose.png"/*tpa=http://z.8868.cn/icons/eyesclose.png*/))})},s=function(e){$.ajax({url:"/rent/games",data:{type:e.type||1,letter:e.letter,keywords:e.keywords},success:function(t){0===t.code?e.done(t):e.fail&&e.fail(t)}})},c=function(e){$.ajax({url:"/rent/channels",data:{game_id:e.game_id},success:function(t){0===t.code?e.done(t):e.fail&&e.fail(t)}})},u=function(e){$.ajax({url:"/rent/partitionCategories",data:{game_id:e.game_id,channel_id:e.channel_id},success:function(t){0===t.code?e.done(t):e.fail&&e.fail(t)}})};return{toast:t,letters:n,utils:a,initUploader:o,dialogForm:r,simpleForm:i,seePass:l,get_game:s,get_channel:c,get_partition:function(e){$.ajax({url:"/rent/partitions",data:{game_id:e.game_id,category_id:e.category_id},success:function(t){0===t.code?e.done(t):e.fail&&e.fail(t)}})},get_partition_categories:u,get_url_param:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return n?decodeURI(n[2]):null},get_mobile_code:function(e){function t(){function t(){o<=0?(a.html(e.resend_txt||"重新发送"),clearInterval(n),n=null):a.html(o--+"s")}var o=e.second||60;t(),n=setInterval(t,1e3)}var n,a=e.code_btn;a.on("click",function(){n||(e.mobile.val().match(/^1(3|4|5|6|7|8|9)\d{9}$/)?$.get((e.url||"/auth/sendSmsCode?moblie=")+e.mobile.val(),function(e){base.toast(e.msg),200===e.code&&t()}):(base.toast("请输入手机号码"),e.mobile.focus()))})}}}();$.ajaxSetup({dataType:"json"}),function(e){"function"http://z.8868.cn/pcassets/js/_common/js/==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery||window.Zepto)}(function(e,t){function n(){}function a(e,t){return(t._$container==f?("innerHeight"in d?d.innerHeight:f.height())+f.scrollTop():t._$container.offset().top+t._$container.height())<=e.offset().top-t.threshold}function o(t,n){return(n._$container==f?f.width()+(e.fn.scrollLeft?f.scrollLeft():d.pageXOffset):n._$container.offset().left+n._$container.width())<=t.offset().left-n.threshold}function r(e,t){return(t._$container==f?f.scrollTop():t._$container.offset().top)>=e.offset().top+t.threshold+e.height()}function i(t,n){return(n._$container==f?e.fn.scrollLeft?f.scrollLeft():d.pageXOffset:n._$container.offset().left)>=t.offset().left+n.threshold+t.width()}function l(e,t){var n=0;e.each(function(l,s){function c(){u.trigger("_lazyload_appear"),n=0}var u=e.eq(l);if(!(u.width()<=0&&u.height()<=0||"none"===u.css("display")))if(t.vertical_only)if(r(u,t));else if(a(u,t)){if(++n>t.failure_limit)return!1}else c();else if(r(u,t)||i(u,t));else if(a(u,t)||o(u,t)){if(++n>t.failure_limit)return!1}else c()})}function s(e){return e.filter(function(t,n){return!e.eq(t)._lazyload_loadStarted})}function c(e,t){function n(){i=0,l=+new Date,r=e.apply(a,o),a=null,o=null}var a,o,r,i,l=0;return function(){a=this,o=arguments;var e=new Date-l;return i||(e>=t?n():i=setTimeout(n,t-e)),r}}var u,d=window,f=e(d),A={threshold:100,failure_limit:0,event:"scroll",effect:"show",effect_params:null,container:d,data_attribute:"src",data_srcset_attribute:"original-srcset",skip_invisible:!0,appear:n,load:n,vertical_only:!1,check_appear_throttle_time:300,url_rewriter_fn:n,no_fake_img_loader:!1,placeholder_data_img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRjg3OTFBMTlBRjExMUU4QjFFNjlBMEY0RkVBMTVDQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRjg3OTFBMjlBRjExMUU4QjFFNjlBMEY0RkVBMTVDQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJGODc5MTlGOUFGMTExRThCMUU2OUEwRjRGRUExNUNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJGODc5MUEwOUFGMTExRThCMUU2OUEwRjRGRUExNUNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0MgEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8IAEQgAeAB4AwEiAAIRAQMRAf/EABoAAQADAQEBAAAAAAAAAAAAAAABBAUDAgf/2gAIAQEAAAAA+0gAAAAAAAAAAmYgAq282j493tKpaBRpRpVlebl4DOrafG3l9tABGVe6VvGgAOWUanYATyoXu0AA9eQAAAAAAAB//8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/9oACAECEAAAAIgAByOaejpzzrq79Iz4pemDNfIAAD//xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/2gAIAQMQAAAA6AAHZ6YZ4kvRpnTlF+hgBdXEAAD/xAA2EAACAQMBBAYGCwEAAAAAAAABAgMABBEhBRITQRQiMDFRYSAzQoGRoRUkJVBSU2BjcXOSwf/aAAgBAQABPwD9BBSe4Gtxvw0VI7weye8EFyYp+qG1R+R/mhhiMHINXe05Y5pIoUVd043jrmnvLpzlriT3HFcab82T/ZpL25Q9W4f3nNWu05ZJo4pkV94hQw0xTYUnJpbxZrkQwYcDV35D09pxNJb5ChgupGNR5itnNOssYjk6u9qh8PKroZ2hLhd4mTu8aiiLxyF9mxqyjKjTrUkCyXbtPbiFI494xjnUNzDeSiCW2jVG0VkGq1BGYtoxoTkrLj51tFp2mkEkmE3uqg8POtmRMluSVChtQManz9MjIIpbaS2ukZWBRnFXQ+vS40PEpI1hFzG91KSFBLH2R41FE8M12rsZTwgQT7QoiRFt1CxxgsC4B+QoD7Wz+9/2ntpbm7kJYCNXoDAA78ePYFVYjeAOCDryq7QreyZ5sDU+OJff1LRid5piozmAKNedQWV0LqOSUZCnJJfNCF/pbBGpkLe6t1VJIAGSTpz7K7t+kRgr6xR8RRByQcisHkTWDnAJJPIGrS36OhZ/WsPgOzBIORU9slx1hhJPHxros3E4fDO9UFslv1jh5PkKJJOT2u82MZP3r//EACARAAICAgEFAQAAAAAAAAAAAAECABEDBCASITFAURT/2gAIAQIBAT8A9EkCPkVBbQ7i/Im0jGjCQODL1CplsIAfsYeJkWum/MxKS5Y8dnEXTtP1C+4mGspAUc8uqmQ3ERUFL6n/xAAhEQACAgEEAgMAAAAAAAAAAAABAgADERIgITEEQBNRwf/aAAgBAwEBPwD0VUt1K6msOFg8JvuP4jqMwKTsRtLZiMC+oRW7x+yt86sdS2zCBBtos0tzPi47ljFOSd6XMoxGYscn1P/Z"};u=function(){var e=Object.prototype.toString;return function(t){return e.call(t).replace("[object ","").replace("]","")}}(),e.fn.hasOwnProperty("lazyload")||(e.fn.lazyload=function(t){var a,o,r,i=this;return e.isPlainObject(t)||(t={}),e.each(A,function(n,a){var o=u(t[n]);-1!=e.inArray(n,["threshold","failure_limit","check_appear_throttle_time"])?"String"==o?t[n]=parseInt(t[n],10):"Number"!=o&&(t[n]=a):"container"==n?(t.hasOwnProperty(n)?t[n]==d||t[n]==document?t._$container=f:t._$container=e(t[n]):t._$container=f,delete t.container):!A.hasOwnProperty(n)||t.hasOwnProperty(n)&&o==u(A[n])||(t[n]=a)}),a="scroll"==t.event,r=0==t.check_appear_throttle_time?l:c(l,t.check_appear_throttle_time),o=a||"scrollstart"==t.event||"scrollstop"==t.event,i.each(function(a,r){var l=this,c=i.eq(a),u=c.attr("src"),d=c.attr("data-"+t.data_attribute),f=t.url_rewriter_fn==n?d:t.url_rewriter_fn.call(l,c,d),A=c.attr("data-"+t.data_srcset_attribute),p=c.is("img");if(1==c._lazyload_loadStarted||u==f)return c._lazyload_loadStarted=!0,void(i=s(i));c._lazyload_loadStarted=!1,p&&!u&&c.one("error",function(){c.attr("src",t.placeholder_real_img)}).attr("src",t.placeholder_data_img),c.one("_lazyload_appear",function(){function a(){o&&c.hide(),p?(A&&c.attr("srcset",A),f&&c.attr("src",f)):c.css("background-image",'url("'+f+'")'),o&&c[t.effect].apply(c,r?t.effect_params:[]),i=s(i)}var o,r=e.isArray(t.effect_params);c._lazyload_loadStarted||(o="show"!=t.effect&&e.fn[t.effect]&&(!t.effect_params||r&&0==t.effect_params.length),t.appear!=n&&t.appear.call(l,c,i.length,t),c._lazyload_loadStarted=!0,t.no_fake_img_loader||A?(t.load!=n&&c.one("load",function(){t.load.call(l,c,i.length,t)}),a()):e("<img />").one("load",function(){a(),t.load!=n&&t.load.call(l,c,i.length,t)}).attr("src",f))}),o||c.on(t.event,function(){c._lazyload_loadStarted||c.trigger("_lazyload_appear")})}),o&&t._$container.on(t.event,function(){r(i,t)}),f.on("resize load",function(){r(i,t)}),e(function(){r(i,t)}),this}),e(function(){e("img[data-src]").lazyload()})});