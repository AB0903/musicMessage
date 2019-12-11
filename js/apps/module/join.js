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
    class join{
        constructor(options){
            this.key = getQueryVariable("id");
            this.btn = options.btn;
            this.btn1 = options.btn1;
            this.btn2 = options.btn2;
            this.number = options.number;
            this.g = this.number.val();
            this.arr =[];
            this.addEvent();
            this.init();
        }
        init(){
            var this1 = this;
            this.btn.on("click",function () {
                this1.arr = getCookie("numGoods") ? JSON.parse(getCookie("numGoods")) : [];
                // console.log(goods);
                this1.obj = {
                    name:this1.key,
                    num: +this1.number.val(),
                };
                if(this1.arr.length<1){
                    this1.arr.push(this1.obj);
                }else{
                    console.log(this1.arr);
                    let isBeing = this1.arr.some((a,b,c)=>{
                        this1.idx = b;
                        return(a.name === this1.key)
                    });
                    if(isBeing){
                        this1.arr[this1.idx].num = (+this1.arr[this1.idx].num) + (+this1.number.val());
                    }else{
                        this1.arr.push((this1.obj))
                    }
                }
                setCookie("numGoods",JSON.stringify(this1.arr),{
                    expires:3
                });
            })
        }
        addEvent(){
            var this1 = this;
            this.btn1.on("click",function () {
                this1.g++;
                this1.number.val(this1.g);
            });
            this1.btn2.on("click",function () {
               if(this1.g <2){
                   this1.number.val(1);
                   this1.g=1;
               }else {
                   this1.g--;
                   this1.number.val(this1.g);
               }
            });
        }
    }
    return join;
});