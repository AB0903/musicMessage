require.config({
    baseUrl:"js/apps/module",
    paths:{
        jq:"../../libs/jquery"
    }
});

require(["jq","Tab","list","morelist","Floor","Login"],(_, Tab, list, morelist, Floor,Login)=>{
    new Tab({
        ali:$(".nav-index").find("li")
    });
    new list($("#right").children("span").eq(0));
    new morelist({
        allLi:$(".BoxUl").find("li")
    });
    new Floor({
        div1:$(".MainBlock"),
        div2:$(".Main"),
    });
    new Login({
        login:$("header").children("#left").children("i").eq(0),
        require:$("header").children("#left").children("i").eq(1),
    })
});