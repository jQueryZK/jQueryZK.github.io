// build time:Fri Aug 21 2020 09:23:16 GMT+0800 (GMT+08:00)
function t(){var t="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";var o=t.split(",");var a="#";for(var e=0;e<6;e++){a+=o[Math.floor(Math.random()*16)]}return a}var o=0;jQuery(document).ready(function(a){a("body").click(function(e){var n=GLOBAL_CONFIG.ClickShowText;var r=n.text.split(",");var i=a("<span/>").text(r[o]);o=(o+1)%r.length;var c=e.pageX,f=e.pageY;i.css({"z-index":150,top:f-20,left:c-40,position:"absolute","font-weight":"bold",color:t(),cursor:"default","font-size":n.fontSize||"inherit"});a("body").append(i);i.animate({top:f-180,opacity:0},1500,function(){i.remove()})})});
//rebuild by hrmmi 