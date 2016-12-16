/**
 * Created by Administrator on 2016/11/8.
 */
;(function ($, window, document) {
    "use strict"
    function LinkSelect(context, options, data) {
        var self = this;
        this.defaults = {
            secondId: 's2',
            thirdId: 's3'
        }
        this.firstSelectBox = context;
        this.options = $.extend({}, this.defaults, options);
        this.secondSelectBox = $("#" + this.options.secondId);
        this.thirdSelectBox = $("#" + this.options.thirdId);
        this.ajaxData = data;
        this.init();
    }

    function getChildData(id,data) {
        var childArray = new Array();
        for (var i = 0, len = data.length; i < len; i++) {
            if (data[i].parentId == id) {
                childArray.push(data[i]);
            }
        }
        return childArray;
    }

    // function selectRow(level,selectId) {
    //     switch (level){
    //         case 1: refreshSecondData(selectId); break;
    //         case 2: refreshThirdData(selectId); break;
    //         case 3: break;
    //
    //     }
    // }
    LinkSelect.prototype = {
        constructor: LinkSelect,
        init: function () {
            //给第一个selectBox赋值
            var firstArray = [];
            var self = this;
            for (var i = 0; i < this.ajaxData.length; i++) {
                if (this.ajaxData[i].parentId == 0) {
                    firstArray.push(this.ajaxData[i]);
                }
            }
            for (var i = 0; i < firstArray.length; i++) {
                (function (i) {
                    var id = firstArray[i].id;
                    $('<li data-value=' + firstArray[i].value + '>' + firstArray[i].name + '</li>').appendTo(self.firstSelectBox).on('click', function () {
                        self.selectRow(1, id);

                    });
                })(i);
            }
            i = null;
        },
        selectRow: function (level, selectId) {
            switch (level) {
                case 1:
                    this.refreshSecondData(selectId);
                    break;
                case 2:
                    this.refreshThirdData(selectId);
                    break;
                case 3:
                    break;

            }
        },
        // 点击第一个selectBox,为第二个selectBox中的赋值
        refreshSecondData: function (id) {
            var secondArray = getChildData(id,this.ajaxData);
            this.secondSelectBox.empty().parent().siblings(".selectbox_value").html("----- 请选择 -----");
            this.thirdSelectBox.empty().parents().siblings(".selectbox_value").html("----- 请选择 -----");
            var self = this;
            for (var i = 0; i < secondArray.length; i++) {
                (function (i) {
                    var id = secondArray[i].id;
                    $('<li data-value=' + secondArray[i].value + '>' + secondArray[i].name + '</li>').appendTo(self.secondSelectBox).on('click', function () {
                        self.selectRow(2,id);

                    });
                })(i);

            }
            i = null;
        },
        // 点击第二个selectBox,为第三个selectBox中的赋值
        refreshThirdData: function (id) {
            var thirdArray = getChildData(id,this.ajaxData);
            this.thirdSelectBox.empty().parent().siblings(".selectbox_value").html("----- 请选择 -----");
            var self = this;
            for (var i = 0; i < thirdArray.length; i++) {
                    var id = thirdArray[i].id;
                    $('<li data-value=' + thirdArray[i].value + '>' + thirdArray[i].name + '</li>').appendTo(self.thirdSelectBox)


            }
        }


    }
    $.fn.linkSelect = function (options, data) {
        var $this = $(this);
        return $this.each(function () {
            new LinkSelect($this, options, data);
        })
    }


})(jQuery, window, document)