define(()=>{
    class Login{
        constructor(options){
            this.options = options;
            this.data = [];
            this.user2 =[];
            this.user1 = "";
            this.add();
        }
        add(){
            var this1 = this;
            this.box =$("<div>").appendTo(document.body).css({
                width:500,
                height: 260,
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

            this.span=$("<span>").css({
                position:"absolute",
                color:"#fff",
                fontSize:"16px",
                left:60,
                top:165
            }).html("确认密码");
            this.user = $("<input>").css({
                    width:240,
                    lineHeight:"20px",
                    position: "absolute",
                    top:80,
                    left: 130,
                backgroundColor:"#fff",
                }).appendTo(this.box);
            this.password = $("<input>").css({
                width:240,
                lineHeight:"20px",
                position: "absolute",
                top:120,
                left: 130,
                backgroundColor:"#fff",
            }).appendTo(this.box);
            this.password[0].type = "password";
            this.pass = $("<input>").css({
                width:240,
                lineHeight:"20px",
                position: "absolute",
                top:160,
                left: 130,
                backgroundColor:"#fff",
            });
            this.pass[0].type = "password";
            this.options.login.on("click",function () {
                $(this1.btn1).css({
                    top:165
                });
                this1.btn2.remove();
                this1.pass.remove();
                this1.span.remove();
                $(this1.box).slideToggle(200)
            });
            this.options.require.on("click",function () {
                $(this1.btn1).css({
                    top:200
                });
                this1.btn2.appendTo(this1.box).on("click",function () {
                    this1.box.hide(200)
                });
                this1.pass.appendTo(this1.box);
                this1.span.appendTo(this1.box);
                $(this1.box).slideToggle(200)
            });
            this.btn1=$("<button>").appendTo(this.box).css({
                position:"absolute",
                left:150,
                top:165,
                width:80,
                lineHeight:"26px",
                backgroundColor: "#ff6600",
                border:"none",
                color:"#fff",
            }).html("登录").on("click",function () {
                let str = getCookie("userMsg");
                let isBeing = false;
                if(str){
                this1.str1 = JSON.parse(str);
                this1.obj = {
                    user:$(this1.user).val(),
                    pass:$(this1.password).val(),
                };
                for(let i = 0;i<this1.str1.length;i++){
                    if(this1.str1[i].user === this1.obj.user){
                        isBeing = true;
                        $(this1.box).hide(200);
                    }
                }
                if(!isBeing){
                    alert("用户名不存在");
                }
            }
            });
            this.btn2=$("<button>").css({
                position:"absolute",
                left:240,
                top:200,
                width:80,
                lineHeight:"26px",
                backgroundColor: "#ff6600",
                border:"none",
                color:"#fff",
            }).html("注册").on("click",function () {
                if(this1.user1){
                    this1.user1 = getCookie("userMsg");
                    this1.user2 = JSON.parse(this1.user1);
                }
                if(this1.user2.length===0){
                    this1.obj = {
                        user: this1.user.val(),
                        pass: this1.password.val(),
                    };
                    this1.data.push(this1.obj);
                    setCookie("userMsg", JSON.stringify(this1.data), {
                        expires: 5
                    });
                    this1.user1 = getCookie("userMsg");
                    this1.user2 = JSON.parse(this1.user1);
                }else{
                    this1.obj = {
                        user: this1.user.val(),
                        pass: this1.password.val(),
                    };
                    this1.data.push(this1.obj);
                    for (let i = 0; i < this1.user2.length; i++) {
                        console.log(this1.user2[i].user, this1.user.val());
                        if (this1.user2[i].user === this1.user.val()) {
                            alert("用户名已存在");
                        }
                        if (this1.user2[i].user !== this1.user.val()) {
                            setCookie("userMsg", JSON.stringify(this1.data), {
                                expires: 5
                            });
                            this1.user1 = getCookie("userMsg");
                            this1.user2 = JSON.parse(this1.user1);
                        }
                    }
                }
                $(this1.box).hide(200)
            });
            if(this.user1){
                this.user1 = getCookie("userMsg");
                this.user2 = JSON.parse(this1.user1);
            }
        }
    }
    return Login;
});