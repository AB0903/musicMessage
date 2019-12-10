define(()=>{
    class Bigimg{
        constructor(options){
            this.options = options;
            $(this.options.Bbox).css({
                backgroundColor:"#fff"
            });
            var this1 = this;
            this.options.smallB.hover(function () {
                this1.init()
            },function () {
                this1.out()
            });
            this.options.span.on("mousemove",function (e) {
                this1.move(e)
            })
        }
        init(){
            this.options.span[0].style.display = "block";
            this.options.Bbox[0].style.display = "block";
            this.BW = this.options.Bbox[0].offsetWidth;
            this.BH = this.options.Bbox[0].offsetHeight;
            this.BimgW = this.options.Bimg[0].offsetWidth;
            this.BimgH = this.options.Bimg[0].offsetHeight;
            this.SW = this.options.smallB[0].offsetWidth;
            this.SH = this.options.smallB[0].offsetHeight;
            $(this.options.span).css({
                width:( this.BW / this.BimgW )*this.SW,
                height:( this.BH / this.BimgH )*this.SH,
            })
        }
        move(e){
            this.l = (e.clientX - this.options.smallB[0].offsetLeft - this.options.span[0].offsetWidth/2);
            this.t = (e.clientY - (this.options.smallB[0].offsetTop - this.options.span[0].offsetHeight/2));
            console.log(this.t);
            if( this.l < 0){
                this.l = 0
            }
            if(this.l > this.SW - this.options.span[0].offsetWidth){
                this.l = this.SW - this.options.span[0].offsetWidth;
            }
            if( this.t < 0){
                this.t=0
            }
            if(this.t > this.SH - this.options.span[0].offsetHeight){
                console.log(this.SH - this.options.span[0].offsetHeight);
                this.t = this.SH - this.options.span[0].offsetHeight
            }
            $(this.options.span).css({
                left :this.l,
                top: this.t
            });
            $(this.options.Bimg).css({
                left: this.l/(this.SW - this.options.span[0].offsetWidth)*(this.BW - this.options.Bimg[0].offsetWidth),
                top: this.t/(this.SH - this.options.span[0].offsetHeight)*(this.BH - this.options.Bimg[0].offsetHeight),
            });
        }
        out(){
            $(this.options.span).css({
                display:"none"
            });
            $(this.options.Bbox).css({
                display:"none"
            })
        }
    }
    return Bigimg;
});