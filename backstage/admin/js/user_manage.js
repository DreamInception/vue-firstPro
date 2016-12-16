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
    //tab
    $(".list_tabs li").click(function () {
        $(this).parent("ul").find("li").removeClass("cur");
        $(this).addClass("cur");
    });
    //select
    $("select").selectBox();
})