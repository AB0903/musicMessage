define(()=>{
    class morelist{
        constructor(options){
            this.options = options.allLi;
            this.init();
        }
        init(){
            this.list = $("<div>");
            this.list.css({
                backgroundColor:"#e3e3e3",
                width:400,
                height:270,
                position:"absolute",
                border:"1px solid #000",
                display:"none",
                top:40,
                left:200,
                zIndex:2
            }).appendTo(this.options.parent().parent()).addClass("list");
            for(let i =0 ;i<3;i++){
                    $(`<p>二级菜单${i + 1}</p>`).css({
                        width: 400,
                        height: 90,
                        textAlign: "center",
                        color: "#ff6600"
                    }).hover(function () {
                        $(`<div>这是二级菜单内容</div>`).css({
                            width: 400,
                            height: 60,
                            backgroundColor: "#fff",
                            display: "block",
                        }).appendTo($(this))
                    }, function () {
                        $(this).children('div').css({
                            display: "none"
                        })
                    }).appendTo(this.list).html(`${this.list.siblings("ul").find("a").html()}`)
            }
                this.options.parent().parent().hover(function () {
                    $(this).children('.list').css({
                        display:"block"
                    })
                },function () {
                    $(this).children(".list").css({
                        display:"none"
                    })
                })
        }
    }
    return morelist;
});