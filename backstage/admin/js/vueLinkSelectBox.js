(function(){
    var first_tm = '<div class="dropdown f-fl" id="role">'+
        '<select name="standard-dropdown" class="standard-dropdown wide" :id="lsb_id">'+
        '<option value="0" selected="selected">{{lsb_txt}}</option>'+
        '<option v-for="item in firstArray" :value="item.id" @change="addDataToSecond(item.id)">{{item.name}}</option>'+
        '</select>'+
        '</div>';
    var firstlinkSelectBox = Vue.extend({
        template: first_tm,
        props: ['lsb_data','lsb_txt','lsb_id'],
        // data: function(){
        //     return lsb_id;
        // },

        computed: {
            firstArray: function () {
                var list = [];
                for (var i = 0; i < this.lsb_data.length; i++) {
                    if (this.lsb_data[i].parentId == 0) {
                        list.push(this.lsb_data[i]);
                    }
                }

                return list;
            }
        },
        methods: {
            getChildData: function (id,data) {
                var childArray = new Array();
                for (var i = 0, len = data.length; i < len; i++) {
                    if (data[i].parentId == id) {
                    childArray.push(data[i]);
                    }
                }
                return childArray;
            },
            addDataToSecond: function (id) {
                var vm = this;
                vm.getChildData(id,vm.lsb_data);
                this.$emit('addDataToSecond',id);
            }
        }
    });

    window.Vflsb = firstlinkSelectBox;















})();