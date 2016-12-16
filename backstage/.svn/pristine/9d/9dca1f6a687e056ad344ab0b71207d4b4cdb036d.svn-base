/**
 * Created by xzb on 2016/12/15.
 */
$(function () {
    var app = new Vue({
        el: '#app',
        data:{
            cur: 1,
            all:20,
            total_count:100,
            page:'1'
        },
        components:{
            'vue-nav': Vnav
        },
        methods:{
            listens:function(data){
                this.cur=data;
                this.page=this.cur;
                // console.log(app.page);
            }
        }
    });

    /** 批量新增 */
    $(".btn-allAdd").click(function () {
        $(".allAdd-div").toggle();
    });
    /** 批量新增点击确认 */
    $(".btn-add-submit").click(function () {
        $(".allAdd-div").hide();
    });
    /** 批量新增取消 */
    $(".btn-add-del").click(function () {
        $(".allAdd-div").hide();
    });
    /** 点击修改按钮 */
    $(".alert-modify").click(function () {
        $(".coverDiv").show().css({
            "width":$(window).width(),
            "height":$(window).height()
        });
        $(".alertDiv").show();
    });
    /** 点击修改按钮弹出框的确认 */
    $(".alert-submit").click(function () {
        $(".coverDiv").hide();
        $(".alertDiv").hide();
    });
    /** 点击修改按钮弹出框的取消 */
    $(".alert-del").click(function () {
        $(".coverDiv").hide();
        $(".alertDiv").hide();
    })
});