define(()=>{
    class page{
        constructor(options){
            this.ul = options.ul;
            this.url = options.url;
            // this.linkBox = options.linkBox;
            this.load();
        }
        load(){
            let this1 = this;
            Ajaxall({
                url:this.url,
                type:"get",
                callback:function(res){
                    this1.res = JSON.parse(res);
                    this1.display();
                }
            })
        }
        display(){
            let str = "";
            for(var i=0;i<this.res.length;i++){
                str += `
                <li>
                <div class="linkBox">
                    <a class="item" href="details.html?id=${this.res[i].showId}">
                        <img src="${this.res[i].url}">
                        <p class="itemName">${this.res[i].name}</p>
                    </a>
                    <p class="price"><i>￥</i>${this.res[i].pirce}</p>
                </div>
            </li>
                `
            }
            this.ul.html(str)
        }
    }
    return page;
});