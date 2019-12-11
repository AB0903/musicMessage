require.config({
    baseUrl:"js/apps/module",
    paths:{
        jq:"../../libs/jquery"
    }
});

require(["jq","Tab","list","morelist","Floor","Login","cookie","Ajax-all","page"],(_, Tab, list, morelist, Floor,Login,___,__,page)=>{
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
    });
    new page({
        url:"http://localhost/1911-server/online/data/view.json",
        linkBox:$(".linkBox"),
        ul:$(".visible").children("ul"),
        fc:$(".fc"),
        fr:$(".fr"),
    });

});