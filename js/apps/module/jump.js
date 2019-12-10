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
   class jump{
       constructor(options){
           this.Id = getQueryVariable("id");
           this.url = options.url;
           this.img = options.img;
           this.name = options.name;
           this.price = options.price;
           this.big = options.Bimg;
           this.aLink = options.aLink;
           console.log(this.img[0]);
           console.log(this.name[0]);
           console.log(this.price[0]);
           console.log(this.aLink[0]);
           this.load()
       }
       load(){
            let this1 = this;
            Ajaxall({
                url:this.url,
                type:"get",
                callback:function (res) {
                    this1.res = JSON.parse(res);
                    this1.display();
                }
            })
       }
       display(){
           for(let i = 0;i<this.res.length;i++){
               if(this.res[i].showId === this.Id){
                   this.record = this.res[i]
               }
           }
           this.img[0].src =this.record.url;
           this.name.html(this.record.name);
           this.price.html(this.record.price);
           this.big[0].src = this.record.url;
           this.aLink[0].href = `car.html?id=${this.record.showId}`
       }
   }
   return jump;
});