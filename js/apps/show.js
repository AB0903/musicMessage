require.config({
    baseUrl:"js/apps/module",
    paths:{
        jq:"../../libs/jquery"
    }
});
require(["jq","Login","big"],(_,  Login  ,Bigimg)=>{
    // new Login({
    //         login:$("header").children("#left").children("i").eq(0),
    //         require:$("header").children("#left").children("i").eq(1),
    //     });
        new Bigimg({
            smallB:$(".Mmain").find(".box"),
            span:$(".Mmain").find(".box").children("span"),
            Bbox:$(".Mmain").find(".big"),
            Bimg:$(".Mmain").find(".big").children("img")
        })
});