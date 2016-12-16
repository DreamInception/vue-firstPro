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

    /** �������� */
    $(".btn-allAdd").click(function () {
        $(".allAdd-div").toggle();
    });
    /** �����������ȷ�� */
    $(".btn-add-submit").click(function () {
        $(".allAdd-div").hide();
    });
    /** ��������ȡ�� */
    $(".btn-add-del").click(function () {
        $(".allAdd-div").hide();
    });
    /** ����޸İ�ť */
    $(".alert-modify").click(function () {
        $(".coverDiv").show().css({
            "width":$(window).width(),
            "height":$(window).height()
        });
        $(".alertDiv").show();
    });
    /** ����޸İ�ť�������ȷ�� */
    $(".alert-submit").click(function () {
        $(".coverDiv").hide();
        $(".alertDiv").hide();
    });
    /** ����޸İ�ť�������ȡ�� */
    $(".alert-del").click(function () {
        $(".coverDiv").hide();
        $(".alertDiv").hide();
    })
});