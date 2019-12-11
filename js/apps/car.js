require.config({
    baseUrl:"js/apps/module",
    paths:{
        jq:"../../libs/jquery"
    }
});
require(["jq","shopCar","cookie","Ajax-all"],(_,shopCar,__,___)=>{
    new shopCar({
        url:"http://localhost/1911-server/online/data/view.json",
        nul:$("#shopping").children(".bottom"),
        goods:$("#carBox"),
    });
});