define(()=>{
    class page{
        constructor(options){
            this.ul = options.ul;
            this.url = options.url;
            this.fc = options.fc;
            this.fr = options.fr;
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
            for(var i=0;i<5;i++){
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
            this.ul.html(str);
            let str1 = "";
            str1 = `
                <div class="fc-t">
                    <div class="cu">促</div>
                    <div class="item-a">
                        <a href="http://localhost/1911-server/online/details.html?id=${this.res[5].showId}">
                        <p class="name">${this.res[5].name}</p>
                         <p class="price"><i>￥</i>${this.res[5].pirce}</p>
                        <img src="${this.res[0].url}">
                        </a>
                     </div>
                </div>
            `;
            let str2 = "";
            str2 = `
            <div class="fc-b-l">
                <div class="cu">促</div>
                    <div class="item-a">
                    <a href="http://localhost/1911-server/online/details.html?id=${this.res[6].showId}">
                        <p class="name">${this.res[6].name}</p>
                         <p class="price"><i>￥</i>${this.res[6].pirce}</p>
                        <img src="${this.res[6].url}">
                        </a>
                </div>
            </div>
            `;
            let str3 = "";
            str3 = `
            <div class="fc-b-r">
                <div class="cu">促</div>
                    <div class="item-a">
                    <a href="http://localhost/1911-server/online/details.html?id=${this.res[7].showId}">
                        <p class="name">${this.res[7].name}</p>
                        <p class="price"><i>￥</i>${this.res[7].pirce}</p>
                        <img src="${this.res[7].url}">
                        </a>
                    </div>    
                </div>
            </div>
            `;
            let str4 = `<div class="fc-b">${str2}${str3}</div>`;
            str1 += str4;
            this.fc.html(str1);
            let str5 = "";
            for(let i = 8 ;i <this.res.length;i++){
                str5 += `
                    <div class="fr-l">
                        <div class="cu">促</div>
                        <div class="item-a">
                        <a href="http://localhost/1911-server/online/details.html?id=${this.res[i].showId}">
                            <p class="name">${this.res[i].name}</p>
                            <p class="price"><i>￥</i>${this.res[i].pirce}</p>
                            <img src="${this.res[i].url}">
                            </a>
                        </div>
                    </div>
                    `
            }
            this.fr.html(str5);
        }
    }
    return page;
});