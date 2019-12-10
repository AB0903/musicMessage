require.config({
    baseUrl:"js/apps/module",
    paths:{
        jq:"../../libs/jquery"
    }
});
require(["jq","shopCar"],(_,shopCar)=>{
    new shopCar({
        nul:$("#shopping").children(".bottom"),
        goods:$("#carBox"),
    });
});