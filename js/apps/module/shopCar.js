define(()=>{
    class shopCar{
        constructor(options){
            this.url = options.url;
            this.nul = options.nul;
            this.goods = options.goods;
            this.arr=[];
            this.init();
        }
        init(){
            let str = getCookie("numGoods");
            this.str2 = JSON.parse(str);
            if(this.str2.length<1){
                this.nul.appendTo("document");
                this.goods.remove();
            }else{
                this.nul.remove();
                this.goods.appendTo("document");
                this.img = this.goods.find("img");
                this.name = this.goods.find(".cart-c").find(".cl2").children("h2");
                this.p = this.goods.find(".cart-c").find(".cl3").children("span");
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
            let this1 = this;
            let string = "";
            for(let j = 0;j<this.str2.length;j++) {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].showId === this.str2[j].name) {
                        this.arr.push(res[i].showId)
                    }
                }
            }
            for(let i = 0;i<res.length;i++) {
                for(let k = 0;k<this.arr.length;k++) {
                    if (res[i].showId === this.arr[k]) {
                            string += `
                        <div class="goods ${res[i].showId}">
                            <ul>
                                <li>
                                    <div class="fix">
                                        <div class="cl1">
                                            <input type="checkbox">
                                        </div>
                                        <div class="cl2">
                                            <a><img src="${res[i].url}"></a>
                                            <h2>${res[i].name}</h2>
                                        </div>
                                        <div class="cl3">
                                            <s>￥</s><span>${res[i].pirce}</span>
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
                }
            }
            this.goods.children(".cart").children(".cart-c").html(string);
            let str = getCookie("numGoods");
            let str1 = JSON.parse(str);
            for(let j=0;j<res.length;j++) {
                for (let i = 0; i < str1.length; i++) {
                    if(res[j].showId === str1[i].name){
                        this.num = this.goods.find(".cart-c").find(".cl4").find("input");
                        this.all = this.goods.find(".cart-c").find(".cl5").find("span");
                            this.num[i].value = str1[i].num;
                            this.all[i].innerHTML = this.num[i].value * res[j].pirce;
                    }
                }
            }
            this.delete = this.goods.find(".cart-c").find(".cl6").children("button");
            this.delete.on("click",function () {
                let a = $(this).parent().parent().parent().parent().parent().attr("class");
                let cl = this1.delete.parent().parent().parent().parent().parent();
                for(let c =0 ;c<cl.length;c++){
                    if(a===$(cl[c]).attr("class")){
                        a=a.substring(6,9);
                        for(let q =0;q<str1.length;q++){
                            if(str1[q].name === a){
                                let b = str1.indexOf(str1[q]);
                                console.log(b);
                                str1.splice(b,1);
                                for(let i=0;i<str1.length;i++){
                                    this.arr1 = [];
                                    this.arr1.push(str1[i]);
                                    setCookie("numGoods",JSON.stringify(this.arr1))
                                }
                            }
                        }
                        cl[c].remove();
                    }
                }
            })
        }
    }
    return shopCar
});