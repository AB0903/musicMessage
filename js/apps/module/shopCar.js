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
                this.display();
                let str1 = getCookie("numGoods");
                this.str2 = JSON.parse(str1);

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
            let this1 = this;
            let string = "";
            for(let j = 0;j<this.str2.length;j++){
                string += `
            <div class="goods ${res[j].showId}">
                <ul>
                    <li>
                        <div class="fix">
                            <div class="cl1">
                                <input type="checkbox">
                            </div>
                            <div class="cl2">
                                <a><img src="${res[j].url}"></a>
                                <h2>${res[j].name}</h2>
                            </div>
                            <div class="cl3">
                                <s>￥</s><span>${res[j].pirce}</span>
                            </div>
                            <div class="cl4">
                                <span>
                                    <span class="minus">-</span>
                                    <input type="text" value="">
                                    <span class="plus">+</span>
                                </span>
                            </div>
                            <div class="cl5">
                                <s>￥</s><span class="sum"></span>
                            </div>
                            <div class="cl6">
                                <button>删除</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
                `
            }
            this.goods.children(".cart").children(".cart-c").html(string);
            for(let i = 0; i<res.length;i++){
                if(res[i].showId === this.idx){
                    this.route = this.res[i]
                }
            }
            console.log(this.route);
            let str = getCookie("numGoods");
            let str1 = JSON.parse(str);
            this.num = this.goods.find(".cart-c").find(".cl4").find("input");
            this.all = this.goods.find(".cart-c").find(".cl5").find("span");
            for(let k =0 ;k<str1.length;k++){
                this.num[k].value = str1[k].num;
                this.all[k].innerHTML = this.num[k].value * this.route.pirce;
            }
            this.delete = this.goods.find(".cart-c").find(".cl6").children("button");
            this.delete.on("click",function () {
                let a = $(this).parent().parent().parent().parent().parent().attr("class");
                let cl = this1.delete.parent().parent().parent().parent().parent();
                for(let c =0 ;c<cl.length;c++){
                    if(a===$(cl[c]).attr("class")){
                        cl[c].remove();
                    }
                }
            })
        }
    }
    return shopCar
});