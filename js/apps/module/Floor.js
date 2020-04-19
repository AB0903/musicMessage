define(()=>{
    class Floor{
        constructor(options){
            this.obj = options;
            this.haha = ["导航", "热卖促销","录音编曲"];
            // console.log(this.obj);
            this.init();
        }
        init(){
            let that = this;
            this.boarddiv = $("<div>");
                this.boarddiv.appendTo(document.body)
                    .css({
                        width:50,
                        height:150,
                        border:"1px solid #000",
                        position:"fixed",
                        left:30,
                        top:200,
                        display:"none",

                    });
                for(let i =0;i<3;i++){
                   this.p = $(`<p>${this.haha[i]}</p>`).css({
                        width: 50,
                        height: 50,
                        textAlign:"center",
                        borderBottom:"1px solid #0f0"
                    }).appendTo(this.boarddiv).on("click",function () {
                       $("html").stop().animate({
                           scrollTop:that.obj["div"+i].offset().top,
                       })
                   })
                }
                this.src();
        }
        src(){

            var this1 =this;
            document.onscroll = function () {
                // console.log(this1.obj.div1.offset().top);
                if(document.documentElement.scrollTop >this1.obj.div1.prev().offset().top){
                    $(this1)[0].boarddiv.show(200);
                }else{
                    $(this1)[0].boarddiv.hide(200)
                }
            }
        }
    }
    return Floor;
});