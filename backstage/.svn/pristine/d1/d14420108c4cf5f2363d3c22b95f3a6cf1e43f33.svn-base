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
    //日期设置
    $('#dates_start1').datetimepicker({
        format:'Y-m-d H:i',
        formatTime:'H:i',
        timepicker:true,
        onShow:function( ct ){
            this.setOptions({
                dayOfWeekStart : 1,
                lang:'zh'
            })
        }
    });
    $('#dates_end1').datetimepicker({
        format:'Y-m-d H:i',
        formatTime:'H:i',
        timepicker:true,
        onShow:function( ct ){
            this.setOptions({
                dayOfWeekStart : 1,
                lang:'zh'
            })
        }
    });
    //tab
    $(".list_tabs li").click(function () {
        $(this).parent("ul").find("li").removeClass("cur");
        $(this).addClass("cur");
    });
    //select
    $("select").selectBox();

})