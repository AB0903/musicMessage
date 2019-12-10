define(()=>{
    class shopCar{
        constructor(options){
            this.nul = options.nul;
            this.goods = options.goods;
            this.init()
        }
        init(){
            this.nul.remove();
            // this.nul.append("document")
        }
    }
    return shopCar
});