define(()=>{
   class Tab{
        constructor(options){
            this.li = options.ali;
            this.init();
        }
        init(){
            for (var i =0; i<this.li.length;i++){
            this.li[i].onmouseenter =function () {
                if(this.children.length<2) {
                    var div = document.createElement("div");
                    div.innerHTML="这是"+this.innerHTML+"儿子";
                    div.style.position="absolute";
                    div.style.top=-60+"px";
                    div.style.backgroundColor="antiquewhite";
                    this.appendChild(div);
                    this.style.color = "#ff6600";
                    }else {
                    this.children[1].style.top = -60 +"px";
                }
                };
             this.li[i].onmouseleave = function () {
                 this.children[1].style.top = 50 +"px";
             }
            }
        }
   }
   return Tab;
});