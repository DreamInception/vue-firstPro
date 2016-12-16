(function(){
var tm = '<div class="page-bar clearfix">'+
    /*'<div class="page_tips">共{{total_count}}条记录,{{cur}}/{{all}}页</div>'+*/
            '<ul>'+
            // '<li v-if="cur!=1"><a v-on:click="cur--">上一页</a></li>'+
            '<li v-for="index in indexs"  v-bind:class="{ active: cur == index}">'+
                '<a v-on:click="btnclick(index)">{{ index }}</a>'+
                '</li>'+
                '<li v-if="cur+2<all"><a>...</a></li>'+
                '<li  v-if="cur+3<all">'+
                '<a v-on:click="btnclick(all-1)">{{ all-1 }}</a>'+
                '</li>'+
                '<li  v-if="cur+2<all" >'+
                '<a v-on:click="btnclick(all)">{{ all }}</a>'+
                '</li>'+
                '<li v-if="cur!=all"><a v-on:click="btnclick(cur+1)" class="btn">下一页</a></li>'+
                '<li><a v-on:click="btnclick(all)" class="btn">末页</a></li>'+
                // '<li><a>共<i>{{all}}</i>页</a></li>'+
            '</ul>'+
        '</div>';
    var navBar = Vue.extend({
        template: tm,
        props: ['cur', 'all','total_count'],
        data: function(){},
        computed: {
            indexs: function(){
              var left = 1;
              var right = this.all;
              var ar = [] ;
              if(this.all>= 5){
                if(this.cur > 3 && this.cur < this.all-2){
                        left = this.cur - 3;
                        right = this.cur + 2
                }else{
                    if(this.cur<=3){
                        left = 1;
                        right = 5;
                    }else{
                        right = this.all;
                        left = this.all -4;
                    }
                }
             }
            while (left <= right){
                ar.push(left);
                left ++
            }
            return ar
           }
        },
        methods: {
            btnclick: function(data){
                if(data != this.cur){
                    this.cur = data;
	                this.$emit('btnclick',data);
                }
            }
        }
    });
    window.Vnav = navBar
})();