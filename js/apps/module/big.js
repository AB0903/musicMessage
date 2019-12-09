define(()=>{
    class Bigimg{
        constructor(options){
            this.options = options;
            var this1 = this;
            this.options.smallB.hover(function () {
                this1.init()
            },function () {

            });
            this.options.span.on("mousemove",function () {
                this1.move()
            })
        }
        init(){
            this.options.span[0].style.display = "block";
            this.options.Bbox[0].style.display = "block";
            this.BW = this.options.Bbox[0].offsetWidth;
            this.BH = this.options.Bbox[0].offsetHeight;
            this.BimgW = this.options.Bimg[0].offsetWidth;
            this.BimgH = this.options.Bimg[0].offsetHeight;
            this.SW = this.options.smallB.get(0).offsetWidth;
            this.SH = this.options.smallB[0].offsetHeight;
            $(this.options.span).css({
                width:( this.BW / this.BimgW )*this.SW,
                height:( this.BH / this.BimgH )*this.SH,
            })
        }
        move(e){
            let l = (e.clientX - this.options.smallB[0].offsetLeft - this.options.span[0].offsetWidth/2);
            let t = (e.clientY - this.options.smallB[0].offsetTop - this.options.span[0].offsetHeight/2);
            if( l < 0){
                l = 0;
            }
            if(l > this.SW - this.options.span[0].offsetWidth){
                l = this.SW - this.options.span[0].offsetWidth;
            }
        }
    }
    return Bigimg;
});