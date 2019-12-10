require.config({
    baseUrl:"js/apps/module",
    paths:{
        jq:"../../libs/jquery"
    }
});
require(["jq","car"],(_,car)=>{
    // new car();
});