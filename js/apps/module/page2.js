define(()=>{
    class page2{
        constructor(options){
            this.url = options.url;
            this.mc = options.mc;
            this.mr = options.mr;
            this.load();
        }
        load(){
            let this1 =this;
            Ajaxall({
                url:this.url,
                type:"get",
                callback:function(res){
                    this1.res = JSON.parse(res);
                    this1
                }
            })
        }
    }
    return page2;
})