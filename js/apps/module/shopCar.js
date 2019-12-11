define(()=>{
    //获取地址栏参数//可以是中文参数
    function getQueryVariable(key) {
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }
    class shopCar{
        constructor(options){
            this.url = options.url;
            this.nul = options.nul;
            this.goods = options.goods;
            this.idx = getQueryVariable("id");
            this.init();

        }
        init(){
            let str = getCookie("numGoods");
            if(!str){
                this.nul.appendTo("document");
                this.goods.remove();
            }else{
                this.nul.remove();
                this.goods.appendTo("document");
                this.img = this.goods.find("img");
                this.name = this.goods.find(".cart-c").find(".cl2").children("h2");
                this.p = this.goods.find(".cart-c").find(".cl3").children("span");
                this.num = this.goods.find(".cart-c").find(".cl4").find("input");
                this.all = this.goods.find(".cart-c").find(".cl5").find("span");
                this.delete = this.goods.find(".cart-c").find(".cl6").children("button");
                console.log(this.img[0]);
                console.log(this.name[0]);
                console.log(this.p[0]);
                console.log(this.num[0]);
                console.log(this.all[0]);
                console.log(this.delete[0]);
                this.display();
            }
        }
        display(){
            let this1 = this;
            Ajaxall({
                url:this.url,
                type:"get",
                callback:function (res) {
                    this1.res = JSON.parse(res);
                    this1.add(this1.res)
                }
            });
        }
        add(res){
            for(let i = 0; i<res.length;i++){
                if(res[i].showId === this.idx){
                    this.route = this.res[i]
                }
            }
            console.log(this.route)
            this.img[0].src= this.route.url;
            this.name.html(this.route.name);
            this.p.html(this.route.pirce);
            let str = getCookie("numGoods");
            let str1 = JSON.parse(str);

            this.num.val(str1.num);
            this.all.html(str1.num*this.route.pirce);
        }

    }
    return shopCar
});