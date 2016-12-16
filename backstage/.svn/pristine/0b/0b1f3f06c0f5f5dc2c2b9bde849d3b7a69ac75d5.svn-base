function sendMsg_center(id) {
	var mask = document.createElement("div");
	mask.className = "mask";
	mask.style.height = window.screen.height;
	top.document.body.appendChild(mask);
	// var dataid=$(this).attr("data-id");
	// console.log(dataid)
	var w=$(".alertbar").width(),
		h=$(".alertbar").height();
	$(".alertbar").attr("data-id",id);
	$(".alertbar").css({"margin-left":-(w/2)-30+"px","margin-top":-(h/2)-30+"px"});
	var popup=document.getElementsByClassName("alertbar")[0];
	var str=popup.cloneNode(true);
	top.document.body.appendChild(str);
}