require.config({
    baseUrl:"js/apps/module",
    paths:{
        jq:"../../libs/jquery"
    }
});
require(["jq","Login","big","cookie","jump","Ajax-all","join"],(_,Login,Bigimg,__,jump,___,join)=>{
    new Login({
            login:$("header").children("#left").children("i").eq(0),
            require:$("header").children("#left").children("i").eq(1),
        });
        new Bigimg({
            smallB:$(".Mmain").find(".box"),
            span:$(".Mmain").find(".box").children("span"),
            Bbox:$(".Mmain").find(".big"),
            Bimg:$(".Mmain").find(".big").children("img")
        });
    new jump({
        url:"http://localhost/1911-server/online/data/view.json",
        img:$(".Mmain").children("#left").children(".box").children("img"),
        name:$(".Mmain").children("#right").children(".name").children("h1"),
        price:$(".Mmain").children("#right").children(".summary").children("span").eq(1),
        Bimg:$(".Mmain").children("#left").children(".big").children("img"),
        aLink:$(".Mmain").children("#right").children(".choose").children(".clear").children(".right").children(".btn4").children("a"),
    });
    new join({
       btn:$(".btn4"),
       btn1:$(".btn1"),
       btn2:$(".btn2"),
       number:$(".text"),
    })
});