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
      }
    }
  });
  var app1 = new Vue({
    el: '#app1',
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
      }
    }
  });
})