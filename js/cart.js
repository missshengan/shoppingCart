var vm = new Vue({
    el: '#app',
    data: {
        totalMoney: 0,
        productList: []
    },
    mounted: function() {
        this.cartView();
    },
    filters: {

    },
    methods: {
        cartView: function() {
            var _this = this;
            this.$http.get('data/cartData.json', { 'id': '123' }).then(function(res) {
                console.log(res);
                _this.productList = res.data.result.list;
                _this.totalMoney = res.data.result.totalMoney;
            });
        }
    }
})