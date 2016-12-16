$(document).ready(function() {
    var cmtVm = new Vue({
        el: '.table-content',
        data:{
            allItem:[],
            selectItem: []
        }
    });
    $("select").selectBox().change(function () {

    });
    $(".order-option").click(function(){
        $(this).find(".icon").toggleClass("desc");
        if($(this).find(".icon").hasClass("desc")){
            // 重新载入table数据
        }else{
            // 重新载入table数据
        }
    });

    // table内选择框点击事件
    var table = $(".table");
    $(table).on("click",".check-item",function(){
       if($(this).is(":checked")){
           $(this).parent().parent().addClass("selected");
       }else{
           $(this).parent().parent().removeClass("selected");
       }
    });

    $(table).on("click",".check-all", function(){
        var allCheckbox = $(this).parentsUntil(".table-wrapper").find(".check-item");
        if($(this).is(":checked")) {
            allCheckbox.prop("checked", false);
        }else{
            allCheckbox.prop("checked", true);
        }
        allCheckbox.trigger("click");
    })
});