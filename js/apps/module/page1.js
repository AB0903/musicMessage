define(() => {
    class page1 {
        constructor(options) {
            this.url = options.url;
            this.fc = options.fc;
            this.fr = options.fr;
            this.load()
        }
        load() {
            let this1 = this;
            Ajaxall({
                url: this.url,
                type: "get",
                callback: function (res) {
                    this1.res = JSON.parse(res);
                    this1.display();
                }
            })
        }
        display() {
            let str = "";
            str = `
        <div class="fc-t">
            <div class="cu">促</div>
            <div class="item-a">
                <a href="http://localhost/1911-server/online/details.html?id=${this.res[0].showId}">
                <p class="name">${this.res[0].name}</p>
                <p class="price"><i>￥</i>${this.res[0].pirce}</p>
                <img src="${this.res[0].url}">
                </a>
            </div>
        </div>
            `;
            let str1 = "";
            str1 = `
            <div class="fc-b-l">
                <div class="cu">促</div>
                    <div class="item-a">
                    <a href="href="details.html?id=${this.res[1].showId}">
                        <p class="name">${this.res[1].name}</p>
                         <p class="price"><i>￥</i>${this.res[1].pirce}</p>
                        <img src="${this.res[1].url}">
                        </a>
                </div>
            </div>
            `;
            let str2 = "";
            str2 = `
            <div class="fc-b-r">
                <div class="cu">促</div>
                    <div class="item-a">
                        <p class="name">${this.res[2].name}</p>
                        <p class="price"><i>￥</i>${this.res[2].pirce}</p>
                        <img src="${this.res[2].url}">
                    </div>    
                </div>
            </div>
            `;
            let str3 = `<div class="fc-b">${str1}${str2}</div>`;
            str += str3
            this.fc.html(str);
            let str4 = "";
                for(let i = 3 ;i <5;i++){
                    str4 += `
                    <div class="fr-l">
                        <div class="cu">促</div>
                        <div class="item-a">
                            <p class="name">${this.res[i].name}</p>
                            <p class="price"><i>￥</i>${this.res[i].pirce}</p>
                            <img src="${this.res[i].url}">
                        </div>
                    </div>
                    `
                }
                this.fr.html(str4);
        }
    }
    return page1
})