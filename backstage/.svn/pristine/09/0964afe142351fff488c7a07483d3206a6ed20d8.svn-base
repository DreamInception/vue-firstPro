$(document).ready(function(){
	initpage();
	initNav();
	forUserName();
	$(".arrow").click(function(){
		$(".maincontent").toggleClass("switch");
		if($(".maincontent").hasClass("switch")){
			$(".arrow").html("&gt;");
		}
		else{
			$(".arrow").html("&lt;");
		}
	});
});
window.onresize = function(){
	initpage();
};
function initpage() {
	$(".maincontent,.left").height($(window).height()-$(".header").height()+10);
	$(".right").height($(window).height()-$(".header").height()+10);
}
function forUserName() {
	var screenWidth = window.screen.width;
	if(screenWidth<1280){
		$(".login_user_name").addClass("small_width");
	}
}
function initNav() {
	$.ajax({
		url: "json/nav.json",
		type: "get",
		dataType: "json"
	}).done(function(data){
		var listData = data.data.menuList;
		new Vue({
			el: ".navList",
			data: {
				listData : listData
			}
		});
		$(".navList").on("click","li",function(){
			$(".navList").find("li").removeClass("selectedNav");
			$(this).addClass("selectedNav");
		});

	});
}