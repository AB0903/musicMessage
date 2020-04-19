define(()=>{
    class list{
        constructor(data){
            this.data = data;
            this.init();
        }
        init(){
            this.list = $("<div>");
            for(let i = 0; i< 5; i++){
                $(`<p>列表${i+1}</p>`).css({
                    width:100,
                    height:50,
                    cursor:"pointer",
                    textAlign:"center",
                }).hover(function(){
                    $(this).css({
                        color:"#ff6600"
                    })
                },function(){
                    $(this).css({
                        color:"#000"
                    })
                }).appendTo(this.list);
            }
            this.list.css({
                position: "absolute",
                backgroundColor:"#fff",
                display:"none",
            });
            this.data.css({
                position:"relative"
            }).append(this.list);
            this.data.hover(()=>{
                this.list.stop().slideDown()
            },()=>{
                this.list.stop().slideUp()
            })
        }
    }
    return list;
});