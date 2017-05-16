/*顶部部分元素的显示与隐藏*/
$(window).resize(function(){
	if($(window).scrollTop()>=300) {
		$("#logo img").attr("src", "images/logo3.png");
		$("#nav").show();
		$("#signinSignup").hide(); /* 当滑动到不小于 200px 时，标语、登录、注册显示，导航隐藏 */
    	$("#slogan").css("left", "320px"); 
		if ($(window).width() <= 730) {
			$("#nav").hide();
			$("#slogan").hide();
		}
		else if($(window).width() > 730 && $(window).width()<=1280 ){
			$("#slogan").hide();
		}
		else{
			$("#slogan").show();			
		}
	}
	else{
		$("#logo img").attr("src", "images/logo.png");
		$("#slogan").css("left", "50%");   
		$("#nav").hide();
		$("#signinSignup").show();
		if ($(window).width() <= 760) {
			$("#signinSignup").hide();
			$("#slogan").hide();
			
		}
		else if($(window).width() > 760 && $(window).width()<=1230 ){
			$("#slogan").hide();
		}
		else{
			$("#signinSignup").show();
			$("#slogan").show();    		
		}
	}
	
	/*首页背景*/
	$(".item img:last-of-type").height($(".item img:last-of-type").width() * 2 / 5);
});

$(window).scroll(function () {
    if($(window).scrollTop()>=300) {
    	if ($(window).width() > 800) {
    		$("#nav").show();
    	} else {
    		$("#nav").hide();
    	}
    	
    	$("#signinSignup").hide(); /* 当滑动到不小于 200px 时，标语、登录、注册显示，导航隐藏 */
    	$("#slogan").css("left", "320px");   	
       	$("#logo img").attr("src", "images/logo3.png");
    }else {
    	if ($(window).width() > 800) {
    		$("#signinSignup").show(); /* 当滑动到不小于 200px 时，标语、登录、注册隐藏，导航显示 */
    	}else {
    		$("#signinSignup").hide();
    	}        
		$("#slogan").css("left", "50%");       
       	$("#nav").hide();
       	$("#logo img").attr("src", "images/logo.png");
    }
});

/*微信的显示与隐藏*/
$("#weixinIcon").hover(function() {
	$("#weixinCode").toggle(400);
});

//回到上一步
$("#back").on("click", function(){
	window.history.go(-1);
});

//显示和关闭导航
$("#menu").on("click", function(e){
	$("#navList").slideToggle(400);
	$(document).on("click",function(){
		$("#navList").slideUp(400);
	});
	e.stopPropagation();
});
$("#navList").on("click",function(e){
	e.stopPropagation();
});

/*回到顶部*/
$(window).scroll(function () {
    if($(window).scrollTop()>=100) {
        $("#toTop").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").click(function () { 
    $("html, body").animate({scrollTop: 0}, 100); /* 持续时间为 100ms */
    return false;
});

/*禁止链接的默认事件*/
$(".disabled").on("click", function(e) {
	e.preventDefault();
});

/*留言列表的留言*/
$(".message-list").find("img").removeAttr("width");
$(".message-list").find("img").removeAttr("height");
