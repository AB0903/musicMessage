define(()=>{
    class Login{
        constructor(options){
            this.options = options;
            this.data = [];
            this.add()
        }
        add(){
            var this1 = this;
            this.box =$("<div>").appendTo(document.body).css({
                width:500,
                height:200,
                position:"fixed",
                top: 200,
                left:500,
                backgroundColor:"#666",
                opacity:"0.8",
                display:"none",
            });
            $("<span>").css({
                position:"absolute",
                color:"#fff",
                fontSize:"16px",
                left:80,
                top:85
            }).appendTo(this.box).html("账号");
            $("<span>").css({
                position:"absolute",
                color:"#fff",
                fontSize:"16px",
                left:80,
                top:125
            }).appendTo(this.box).html("密码");
            this.user = $("<input>").css({
                    width:240,
                    lineHeight:"20px",
                    position: "absolute",
                    top:80,
                    left: 130,
                }).appendTo(this.box);
            this.password = $("<input>").css({
                width:240,
                lineHeight:"20px",
                position: "absolute",
                top:120,
                left: 130,
            }).appendTo(this.box);
            this.options.login.on("click",function () {
                $(this1.box).slideToggle(200)
            });
            $("<button>").appendTo(this.box).css({
                position:"absolute",
                left:150,
                top:160,
                width:80,
                lineHeight:"26px",
                backgroundColor: "#ff6600",
                border:"none"
            }).html("登录").on("click",function () {
                this1.data.push(this1.user.val());
                this1.data.push(this1.password.val());
                $(this1.box).hide(200)
            });
        }
    }
    return Login;
});