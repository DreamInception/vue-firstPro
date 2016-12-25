$(function () {
    var resourcePage = new Vue({
        el: '#resource-manage-container',
        data:{
            priceAscClick: true,
            priceDescClick: true,
            gradeAscClick: true,
            gradeDescClick: true,
            downAscClick: true,
            downDescClick: true,
            browseAscClick: true,
            browseDescClick: true,
            cur: 1,
            all:20,
            total_count:100,
            page:'1',

            optData: [1,2],
            optTxt: "daquan",
            selectBoxId: "ss"
        },
        components:{
            'vue-nav': Vnav,
            'first-link-selectbox': Vflsb
        },
        methods:{

            listens:function(data){
                this.cur=data;
                this.page=this.cur;
                // console.log(app.page);
            },
            sortItems: function(msg,event){
                var obj = window.event.target;
                var vm = this;
                switch (msg){
                    case 'price':
                        if($(obj).hasClass("asc-enabled")){
                            vm.priceAscClick = false;
                            vm.priceDescClick = true;
                        };
                        if($(obj).hasClass("desc-enabled")){
                            vm.priceDescClick = false;;
                            vm.priceAscClick = true;
                        };
                        break;
                    case 'grade':
                        if($(obj).hasClass("asc-enabled")){
                            vm.gradeAscClick = false;
                            vm.gradeDescClick = true;
                        };
                        if($(obj).hasClass("desc-enabled")){
                            vm.gradeDescClick = false;;
                            vm.gradeAscClick = true;
                        };
                        break;
                    case 'download':
                        if($(obj).hasClass("asc-enabled")){
                            vm.downAscClick = false;
                            vm.downDescClick = true;
                        };
                        if($(obj).hasClass("desc-enabled")){
                            vm.downDescClick = false;;
                            vm.downAscClick = true;
                        };
                        break;
                    case 'browse':
                        if($(obj).hasClass("asc-enabled")){
                            vm.browseAscClick = false;
                            vm.browseDescClick = true;
                        };
                        if($(obj).hasClass("desc-enabled")){
                            vm.browseDescClick = false;;
                            vm.browseAscClick = true;
                        };
                        break;

                }

            },
            setDateTime: function(){
                //��������
                $.datetimepicker.setLocale('ch');
                $('#dates_start1').datetimepicker({
                    //yearOffset:222,
                    lang:'ch',
                    timepicker:false,
                    format:'Y-m-d',
                    formatDate:'Y-m-d',
                    onShow:function( ct ) {
                        this.setOptions({
                            maxDate: $('#dates_end1').val() ? $('#dates_end1').val() : false
                        })
                    }
                });
                $('#dates_end1').datetimepicker({
                    //yearOffset:222,
                    lang:'ch',
                    timepicker:false,
                    format:'Y-m-d',
                    formatDate:'Y-m-d',
                    onShow:function( ct ) {
                        this.setOptions({
                            minDate: $('#dates_start1').val() ? $('#dates_start1').val() : false
                        })
                    }
                });

                $("#startDate").change(function () {
                    var startDay = $("#startDate").datepicker("getDate");
                    vm.startdate = getFormatDate(startDay);
                    var endDay = $("#endDate").datepicker("getDate");
                    if (vm.startdate && vm.startdate != '') {
                        $("#endDate").datepicker("option", "minDate", vm.startdate);
                    }
                    console.log("startDate startTime date is =========" + vm.startdate);

                });
                $("#endDate").change(function () {
                    var startDay = $("#endDate").datepicker("getDate");
                    var endDay = $("#endDate").datepicker("getDate");
                    vm.enddate = getFormatDate(endDay);
                    if (vm.enddate && vm.enddate != '') {
                        $("#endDate").datepicker("option", "maxDate", vm.enddate);
                    }
                    console.log("endDate endTime date is =========" + vm.enddate);
                });

            },
            initSelectBox: function(){
                $("select").selectBox();
                $(".selectBox-dropdown").css({
                    "max-width":"120px",
                    "width": "120px"
                });
                $(".dropdown").css("display", "inline-block");
                $(".selectBox-label").css("width","auto");
            },
            requestLinkSeletBox: function () {
                var json = {
                    data: [
                        {id: 1,parentId:0,name: '数学'},
                        {id: 2,parentId:0,name: '语文'},
                        {id: 3,parentId:0,name: '英语'},
                        {id: 4,parentId:1,name: '小学数学'},
                        {id: 5,parentId:1,name: '高等数学'},
                        {id: 6,parentId:2,name: '中学语文'},
                    ]
                }
                return json;
            },
            filterSelectData: function () {

            }
        },
        mounted: function(){
            var vm = this;
            //tab
            $(".choose-tabs .default-tab").click(function () {
                $(".choose-tabs .default-tab").removeClass("active-tab");
                $(this).addClass("active-tab");
            });
            vm.setDateTime();
            vm.initSelectBox();
            vm.optData = vm.requestLinkSeletBox().data;
            vm.optTxt = '全部';
            vm.selectBoxId = 'allSelection';
            Vue.nextTick(function () {
                new SelectBox($("#"+vm.selectBoxId)).refresh();
            });
        }
    });


})
